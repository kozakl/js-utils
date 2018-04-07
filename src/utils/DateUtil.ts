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
    private static holidays = [
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
        return now.getDay() === date.getDay();
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
        if (this.isWeekend(date))
            return true;
        else if(this.isEasterOrCC(date))
            return true;
        else if (this.holidays.includes(this.toISO(date, false)))
            return true;
    }
    
    private static isWeekend(date:Date)
    {
        return date.getDay() == 6 ||
               date.getDay() == 0;
    }
    
    private static isEasterOrCC(date:Date)
    {
        let b, c, m, d;
        
        let year = date.getFullYear();
        // Instantiate the date object.
        const temp = Pool.get<Date>(Date, true);
        temp.setHours(0, 0, 0, 0);
        temp.setFullYear(year);
        
        // Find the golden number.
        let golden = year % 19;
        
        // Choose which version of the algorithm to use based on the given year.
        b = ( 2200 <= year && year <= 2299 ) ?
            ( ( 11 * golden ) + 4 ) % 30 :
            ( ( 11 * golden ) + 5 ) % 30;
        
        // Determine whether or not to compensate for the previous step.
        
        c = b;
        if ((b === 0) || (b === 1 && golden > 10))
            c = b + 1;
        
        // Use c first to find the month: April or March.
        m = (1 <= c && c <= 19) ? 3 : 2;
        // Then use c to find the full moon after the northward equinox.
        d = (50 - c) % 31;
        
        temp.setMonth(m, d);
        temp.setMonth(m, d + (7 - temp.getDay()));
        temp.setDate(temp.getDate() + 1);
        if (temp.getTime() === date.getTime())
            return true;
        temp.setDate(temp.getDate() + 59);
        return temp.getTime() === date.getTime();
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
