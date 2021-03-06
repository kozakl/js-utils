import Pool from './Pool';
import {pad2} from './number';

const months = {
    en: [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    pl: [
        'Styczen', 'Luty', 'Marzec',
        'Kwiecień', 'Maj',  'Czerwiec',
        'Lipiec', 'Sierpień', 'Wrzesień',
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

export function monthName(date:Date, lang:'pl'|'en' = 'pl') {
    return months[lang][date.getMonth()];
}

export function monthNameAt(index:number, lang:'pl'|'en' = 'pl') {
    return months[lang][index];
}

export function monthShortName(date:Date) {
    return monthsShort[date.getMonth()];
}

export function monthShortNameAt(index:number) {
    return monthsShort[index];
}

export function dayName(date:Date, lang:'pl'|'en' = 'pl') {
    return days[lang][date.getDay()];
}

export function dayNameAt(index:number, lang:'pl'|'en' = 'pl') {
    return days[lang][index];
}

export function dayShortName(date:Date) {
    return daysShort[date.getDay()];
}

export function dayShortNameAt(index:number) {
    return daysShort[index];
}

export function daysBetween(start:Date, end:Date, days:Date[] = [])
{
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

export function isHoliday(date:Date)
{
    return isWeekend(date) ||
           isRegularHoliday(date) ||
           isEasterOrCC(date);
}

export function isWeekend(date:Date)
{
    return date.getDay() === 6 ||
           date.getDay() === 0;
}

function isRegularHoliday(date:Date) {
    return regularHolidays.includes(formatISO(date, 'MM-DD'));
}

function isEasterOrCC(date:Date)
{
    const year = date.getFullYear(),
          golden = date.getFullYear() % 19;
    let ratio = (golden * 11 + 5) % 30;
    if (ratio === 0 || (ratio === 1 && golden > 10))
        ratio++;
    
    let month = (1 <= ratio && ratio <= 19) ? 3 : 2,
        day = (50 - ratio) % 31;
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

export function formatTime(date:Date, format:string)
{
    const hours = pad2(date.getHours()),
          minutes = pad2(date.getMinutes()),
          seconds = pad2(date.getSeconds());
    switch (format)
    {
        case 'HH:MM:SS':
            return `${hours}:${minutes}:${seconds}`;
        
        case 'HH:MM':
            return `${hours}:${minutes}`;
    }
}

export function formatISO(date:Date, format:string)
{
    const year = date.getFullYear().toString(),
          month = pad2(date.getMonth() + 1),
          day = pad2(date.getDate()),
          hours = pad2(date.getHours()),
          minutes = pad2(date.getMinutes()),
          seconds = pad2(date.getSeconds());
    switch (format)
    {
        case 'YYYY-MM-DD HH:MM:SS':
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        
        case 'YYYY-MM-DDTHH:MM:SS':
            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        
        case 'YYYY-MM-DD HH:MM':
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        
        case 'YYYY-MM-DDTHH:MM':
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
        
        case 'YYYY-MM':
            return `${year}-${month}`;
        
        case 'YY-MM-DD':
            return `${year.substr(2)}-${month}-${day}`;
        
        case 'YY-MM':
            return `${year.substr(2)}-${month}`;
        
        case 'MM-DD':
            return `${month}-${day}`;
        
        case 'HH:MM:SS':
            console.warn('HH:MM:SS in formatISO is deprecated now, use formatTime instead');
            return `${hours}:${minutes}:${seconds}`;
        
        case 'HH:MM':
            console.warn('HH:MM in formatISO is deprecated now, use formatTime instead');
            return `${hours}:${minutes}`;
    }
}

export function formatEUR(date:Date, format:string)
{
    const year = date.getFullYear().toString(),
          month = pad2(date.getMonth() + 1),
          day = pad2(date.getDate()),
          hours = pad2(date.getHours()),
          minutes = pad2(date.getMinutes()),
          seconds = pad2(date.getSeconds());
    switch (format)
    {
        case 'DD.MM.YYYY HH:MM:SS':
            return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
        
        case 'DD.MM.YYYY HH:MM':
            return `${day}.${month}.${year} ${hours}:${minutes}`;
        
        case 'DD.MM.YYYY':
            return `${day}.${month}.${year}`;
        
        case 'DD.MM.YY':
            return `${day}.${month}.${year.substr(2)}`;
        
        case 'DD.MM':
            return `${day}.${month}`;
        
        case 'MM.YYYY':
            return `${month}.${year}`;
        
        case 'MM.YY':
            return `${month}.${year.substr(2)}`;
    }
}
