import Pool from './Pool';
import StringUtil from './StringUtil';
/**
 * @author kozakluke@gmail.com
 */
export default class DateUtil
{
    private static months = [
        'Styczen',     'Luty',     'Marzec',
        'Kwiecień',    'Maj',      'Czerwiec',
        'Lipiec',      'Sierpień', 'Wrzesień',
        'Październik', 'Listopad', 'Grudzień'
    ];
    private static monthsShort = [
        'Sty', 'Lut', 'Mar',
        'Kwi', 'Maj', 'Cze',
        'Lip', 'Sie', 'Wrz',
        'Paź', 'Lis', 'Gru'
    ];
    private static days = [
        'Niedziela', 'Poniedziałek', 'Wtorek',
        'Środa',     'Czwartek',     'Piątek',
        'Sobota'
    ];
    private static daysShort = [
        'Nd', 'Pn', 'Wt',
        'Śr', 'Cz', 'Pt',
        'Sb'
    ];
    private static regularHolidays = [
        '01-01', '01-06', '05-01',
        '05-03', '08-15', '11-01',
        '11-11', '12-25', '12-26'
    ];
    
    public static getMonthName(date:Date)
    {
        return this.months[date.getMonth()];
    }
    
    public static getMonthNameAt(index:number)
    {
        return this.months[index];
    }
    
    public static getMonthShortName(date:Date)
    {
        return this.monthsShort[date.getMonth()];
    }
    
    public static getMonthShortNameAt(index:number)
    {
        return this.monthsShort[index];
    }
    
    public static getDayName(date:Date)
    {
        return this.days[date.getDay()];
    }
    
    public static getDayNameAt(index:number)
    {
        return this.days[index];
    }
    
    public static getDayShortName(date:Date)
    {
        return this.daysShort[date.getDay()];
    }
    
    public static getDayShortNameAt(index:number)
    {
        return this.daysShort[index];
    }
    
    public static getDateOffset(offset:number)
    {
        const date = new Date();
        date.setTime(Date.now());
        date.setDate(date.getDate() + offset);
        date.setHours(0, 0, 0, 0);
        
        return date;
    }
    
    public static getDaysBetween(days:Date[], start:Date, end:Date)
    {
        Pool.freeArray(Date, days);
        
        const current = Pool.get<Date>(Date);
        current.setTime(start.getTime());
        while (current.getTime() <= end.getTime()) {
            const date = Pool.get<Date>(Date);
            date.setTime(current.getTime());
            days.push(date);
            
            current.setDate(current.getDate() + 1);
        }
        
        Pool.free(Date, current);
        return days;
    }
    
    public static isToday(date:Date)
    {
        const now = Pool.get(Date, true);
        now.setTime(Date.now());
        now.setHours(0, 0, 0, 0);
        return now.getTime() === date.getTime();
    }
    
    public static isRequire(date:Date)
    {
        const now = Pool.get(Date);
        now.setTime(Date.now());
        const offset = Pool.get(Date);
        offset.setTime(date.getTime());
        offset.setHours(12 + 24, 0, 0, 0);
        
        Pool.free(Date, now, offset);
        return now > offset;
    }
    
    public static isHoliday(date:Date)
    {
        return this.isWeekend(date) ||
               this.isRegularHoliday(date) ||
               this.isEasterOrCC(date);
    }
    
    private static isWeekend(date:Date)
    {
        return date.getDay() == 6 ||
               date.getDay() == 0;
    }
    
    private static isRegularHoliday(date:Date)
    {
        return this.regularHolidays.includes(this.toISO(date, false));
    }
    
    private static isEasterOrCC(date:Date)
    {
        const year   = date.getFullYear(),
              golden = year % 19;
        let ratio = (golden * 11 + 5) % 30;
        if (ratio === 0 || (ratio === 1 && golden > 10))
            ratio++;
        let month = (1 <= ratio && ratio <= 19) ? 3 : 2,
            day   = (50 - ratio) % 31;
        
        const easter = Pool.get<Date>(Date, true);
        easter.setHours(0, 0, 0, 0);
        easter.setFullYear(year);
        easter.setMonth(month, day);
        easter.setMonth(month, day + (7 - easter.getDay()));
        easter.setDate(easter.getDate() + 1);
        
        if (easter.getTime() === date.getTime())
            return true;
        else {
            easter.setDate(easter.getDate() + 59);
            return easter.getTime() === date.getTime();
        }
    }
    
    public static toISO(date:Date, year = true)
    {
        if (year)
            return date.getFullYear() + '-' + 
                   StringUtil.pad1(date.getMonth() + 1) + '-' + 
                   StringUtil.pad1(date.getDate());
        else
            return StringUtil.pad1(date.getMonth() + 1) + '-' + 
                   StringUtil.pad1(date.getDate());
    }
}
