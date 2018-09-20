import Pool from './Pool';
import StringUtil from './StringUtil';

const months = {
    en: [
        'January', 'February', 'March',
        'April',   'May',      'June',
        'July',    'August',   'September',
        'October', 'November', 'December'
    ],
    pl: [
        'Styczen',     'Luty',     'Marzec',
        'Kwiecień',    'Maj',      'Czerwiec',
        'Lipiec',      'Sierpień', 'Wrzesień',
        'Październik', 'Listopad', 'Grudzień'
    ]
};
const monthsShort = [
    'Sty', 'Lut', 'Mar',
    'Kwi', 'Maj', 'Cze',
    'Lip', 'Sie', 'Wrz',
    'Paź', 'Lis', 'Gru'
];
const days = {
    en: [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday',
        'Saturday'  
    ],
    pl: [
        'Niedziela', 'Poniedziałek', 'Wtorek',
        'Środa', 'Czwartek', 'Piątek',
        'Sobota'  
    ]
};
const daysShort = [
    'Nd', 'Pn', 'Wt',
    'Śr', 'Cz', 'Pt',
    'Sb'
];
const regularHolidays = [
    '01-01', '01-06', '05-01',
    '05-03', '08-15', '11-01',
    '11-11', '12-25', '12-26'
];

export function getMonthName(date:Date, lang:'pl'|'en' = 'pl')
{
    return months[lang][date.getMonth()];
}

export function getMonthNameAt(index:number, lang:'pl'|'en' = 'pl')
{
    return months[lang][index];
}

export function getMonthShortName(date:Date)
{
    return monthsShort[date.getMonth()];
}

export function getMonthShortNameAt(index:number)
{
    return monthsShort[index];
}

export function getDayName(date:Date, lang:'pl'|'en' = 'pl')
{
    return days[lang][date.getDay()];
}

export function getDayNameAt(index:number, lang:'pl'|'en' = 'pl')
{
    return days[lang][index];
}

export function getDayShortName(date:Date)
{
    return daysShort[date.getDay()];
}

export function getDayShortNameAt(index:number)
{
    return daysShort[index];
}

export function getDateOffset(offset:number)
{
    const date = new Date();
    date.setTime(Date.now());
    date.setDate(date.getDate() + offset);
    date.setHours(0, 0, 0, 0);
    
    return date;
}

export function getDaysBetween(days:Date[], start:Date, end:Date)
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

export function isToday(date:Date)
{
    const now = Pool.get(Date, true);
    now.setTime(Date.now());
    now.setHours(0, 0, 0, 0);
    return now.getTime() === date.getTime();
}

export function isRequire(date:Date)
{
    const now = Pool.get(Date);
    now.setTime(Date.now());
    const offset = Pool.get(Date);
    offset.setTime(date.getTime());
    offset.setHours(12 + 24, 0, 0, 0);
    
    Pool.free(Date, now, offset);
    return now > offset;
}

export function isHoliday(date:Date)
{
    return isWeekend(date) ||
           isRegularHoliday(date) ||
           isEasterOrCC(date);
}

function isWeekend(date:Date)
{
    return date.getDay() == 6 ||
           date.getDay() == 0;
}

function isRegularHoliday(date:Date)
{
    return regularHolidays.includes(toISO(date, false));
}

function isEasterOrCC(date:Date)
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

export function toISO(date:Date, year = true)
{
    if (year)
        return date.getFullYear() + '-' + 
               StringUtil.pad1(date.getMonth() + 1) + '-' + 
               StringUtil.pad1(date.getDate());
    else
        return StringUtil.pad1(date.getMonth() + 1) + '-' + 
               StringUtil.pad1(date.getDate());
}