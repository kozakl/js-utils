import {monthName, monthNameAt, monthShortName,
    monthShortNameAt, dayName, dayNameAt, dayShortName, dayShortNameAt, dateOffset, daysBetween,
isToday, isRequire, isHoliday, toISO } from './date';

test('getMonthName', ()=> {
    expect(DateUtil.getMonthName(new Date(2018, 0))).toBe('Styczen');
    expect(DateUtil.getMonthName(new Date(2018, 1))).toBe('Luty');
    expect(DateUtil.getMonthName(new Date(2018, 2))).toBe('Marzec');
    expect(DateUtil.getMonthName(new Date(2018, 3))).toBe('Kwiecień');
    expect(DateUtil.getMonthName(new Date(2018, 4))).toBe('Maj');
    expect(DateUtil.getMonthName(new Date(2018, 5))).toBe('Czerwiec');
    expect(DateUtil.getMonthName(new Date(2018, 6))).toBe('Lipiec');
    expect(DateUtil.getMonthName(new Date(2018, 7))).toBe('Sierpień');
    expect(DateUtil.getMonthName(new Date(2018, 8))).toBe('Wrzesień');
    expect(DateUtil.getMonthName(new Date(2018, 9))).toBe('Październik');
    expect(DateUtil.getMonthName(new Date(2018, 10))).toBe('Listopad');
    expect(DateUtil.getMonthName(new Date(2018, 11))).toBe('Grudzień');
});

test('getMonthNameAt', ()=> {
    expect(DateUtil.getMonthNameAt(0)).toBe('Styczen');
    expect(DateUtil.getMonthNameAt(1)).toBe('Luty');
    expect(DateUtil.getMonthNameAt(2)).toBe('Marzec');
    expect(DateUtil.getMonthNameAt(3)).toBe('Kwiecień');
    expect(DateUtil.getMonthNameAt(4)).toBe('Maj');
    expect(DateUtil.getMonthNameAt(5)).toBe('Czerwiec');
    expect(DateUtil.getMonthNameAt(6)).toBe('Lipiec');
    expect(DateUtil.getMonthNameAt(7)).toBe('Sierpień');
    expect(DateUtil.getMonthNameAt(8)).toBe('Wrzesień');
    expect(DateUtil.getMonthNameAt(9)).toBe('Październik');
    expect(DateUtil.getMonthNameAt(10)).toBe('Listopad');
    expect(DateUtil.getMonthNameAt(11)).toBe('Grudzień');
});

test('getMonthShortName', ()=> {
    expect(DateUtil.getMonthShortName(new Date(2018, 0))).toBe('Sty');
    expect(DateUtil.getMonthShortName(new Date(2018, 1))).toBe('Lut');
    expect(DateUtil.getMonthShortName(new Date(2018, 2))).toBe('Mar');
    expect(DateUtil.getMonthShortName(new Date(2018, 3))).toBe('Kwi');
    expect(DateUtil.getMonthShortName(new Date(2018, 4))).toBe('Maj');
    expect(DateUtil.getMonthShortName(new Date(2018, 5))).toBe('Cze');
    expect(DateUtil.getMonthShortName(new Date(2018, 6))).toBe('Lip');
    expect(DateUtil.getMonthShortName(new Date(2018, 7))).toBe('Sie');
    expect(DateUtil.getMonthShortName(new Date(2018, 8))).toBe('Wrz');
    expect(DateUtil.getMonthShortName(new Date(2018, 9))).toBe('Paź');
    expect(DateUtil.getMonthShortName(new Date(2018, 10))).toBe('Lis');
    expect(DateUtil.getMonthShortName(new Date(2018, 11))).toBe('Gru');
});

test('getMonthShortNameAt', ()=> {
    expect(DateUtil.getMonthShortNameAt(0)).toBe('Sty');
    expect(DateUtil.getMonthShortNameAt(1)).toBe('Lut');
    expect(DateUtil.getMonthShortNameAt(2)).toBe('Mar');
    expect(DateUtil.getMonthShortNameAt(3)).toBe('Kwi');
    expect(DateUtil.getMonthShortNameAt(4)).toBe('Maj');
    expect(DateUtil.getMonthShortNameAt(5)).toBe('Cze');
    expect(DateUtil.getMonthShortNameAt(6)).toBe('Lip');
    expect(DateUtil.getMonthShortNameAt(7)).toBe('Sie');
    expect(DateUtil.getMonthShortNameAt(8)).toBe('Wrz');
    expect(DateUtil.getMonthShortNameAt(9)).toBe('Paź');
    expect(DateUtil.getMonthShortNameAt(10)).toBe('Lis');
    expect(DateUtil.getMonthShortNameAt(11)).toBe('Gru');
});

test('getDayName', ()=> {
    expect(DateUtil.getDayName(new Date(2018, 3, 8))).toBe('Niedziela');
    expect(DateUtil.getDayName(new Date(2018, 3, 9))).toBe('Poniedziałek');
    expect(DateUtil.getDayName(new Date(2018, 3, 10))).toBe('Wtorek');
    expect(DateUtil.getDayName(new Date(2018, 3, 11))).toBe('Środa');
    expect(DateUtil.getDayName(new Date(2018, 3, 12))).toBe('Czwartek');
    expect(DateUtil.getDayName(new Date(2018, 3, 13))).toBe('Piątek');
    expect(DateUtil.getDayName(new Date(2018, 3, 14))).toBe('Sobota');
});

test('getDayNameAt', ()=> {
    expect(DateUtil.getDayNameAt(0)).toBe('Niedziela');
    expect(DateUtil.getDayNameAt(1)).toBe('Poniedziałek');
    expect(DateUtil.getDayNameAt(2)).toBe('Wtorek');
    expect(DateUtil.getDayNameAt(3)).toBe('Środa');
    expect(DateUtil.getDayNameAt(4)).toBe('Czwartek');
    expect(DateUtil.getDayNameAt(5)).toBe('Piątek');
    expect(DateUtil.getDayNameAt(6)).toBe('Sobota');
});

test('getDayShortName', ()=> {
    expect(DateUtil.getDayShortName(new Date(2018, 3, 8))).toBe('Nd');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 9))).toBe('Pn');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 10))).toBe('Wt');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 11))).toBe('Śr');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 12))).toBe('Cz');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 13))).toBe('Pt');
    expect(DateUtil.getDayShortName(new Date(2018, 3, 14))).toBe('Sb');
});

test('getDayShortNameAt', ()=> {
    expect(DateUtil.getDayShortNameAt(0)).toBe('Nd');
    expect(DateUtil.getDayShortNameAt(1)).toBe('Pn');
    expect(DateUtil.getDayShortNameAt(2)).toBe('Wt');
    expect(DateUtil.getDayShortNameAt(3)).toBe('Śr');
    expect(DateUtil.getDayShortNameAt(4)).toBe('Cz');
    expect(DateUtil.getDayShortNameAt(5)).toBe('Pt');
    expect(DateUtil.getDayShortNameAt(6)).toBe('Sb');
});

test('getDateOffset', ()=> {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    expect(DateUtil.getDateOffset(0).toString()).toBe(date.toString());
    
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - 10);
    expect(DateUtil.getDateOffset(-10).toString()).toBe(date.toString());
    
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 10);
    expect(DateUtil.getDateOffset(10).toString()).toBe(date.toString());
});

test('getDaysBetween', ()=> {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - 2);
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1);
    const days = DateUtil.getDaysBetween([], start, end);
    
    let date = new Date(start);
    expect(days[0].toString()).toBe(date.toString());
    
    date = new Date(start);
    date.setDate(date.getDate() + 1);
    expect(days[1].toString()).toBe(date.toString());
    
    date = new Date(start);
    date.setDate(date.getDate() + 2);
    expect(days[2].toString()).toBe(date.toString());
    
    date = new Date(start);
    date.setDate(date.getDate() + 3);
    expect(days[3].toString()).toBe(date.toString());
});

test('isToday', ()=> {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    expect(DateUtil.isToday(date)).toBeTruthy();
    
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() -1);
    expect(DateUtil.isToday(date)).toBeFalsy();
});

test('isRequire', ()=> {
    let date = new Date();
    date.setDate(date.getDate() - 2);
    expect(DateUtil.isRequire(date)).toBeTruthy();
    
    date = new Date();
    date.setDate(date.getDate() + 1);
    expect(DateUtil.isRequire(date)).toBeFalsy();
    
    date = new Date();
    date.setHours(12 + 24, 0, 0, 0);
    if (new Date() > date)
        expect(DateUtil.isRequire(new Date())).toBeTruthy();
    else
        expect(DateUtil.isRequire(new Date())).toBeFalsy();
});

test('isHoliday', ()=> {
    expect(DateUtil.isHoliday(new Date(2018, 4, 30))).toBeFalsy();
    expect(DateUtil.isHoliday(new Date(2018, 3, 5))).toBeFalsy();
    expect(DateUtil.isHoliday(new Date(2018, 3, 7))).toBeTruthy(); // Saturday
    expect(DateUtil.isHoliday(new Date(2019, 2, 9))).toBeTruthy(); // Saturday
    expect(DateUtil.isHoliday(new Date(2018, 4, 13))).toBeTruthy(); // Sunday
    expect(DateUtil.isHoliday(new Date(2019, 2, 24))).toBeTruthy(); // Sunday
    expect(DateUtil.isHoliday(new Date(2017, 3, 17))).toBeTruthy(); // Easter Monday
    expect(DateUtil.isHoliday(new Date(2018, 3, 2))).toBeTruthy(); // Easter Monday
    expect(DateUtil.isHoliday(new Date(2019, 3, 22))).toBeTruthy(); // Easter Monday
    expect(DateUtil.isHoliday(new Date(2017, 5, 15))).toBeTruthy(); // Corpus Christi
    expect(DateUtil.isHoliday(new Date(2018, 4, 31))).toBeTruthy(); // Corpus Christi
    expect(DateUtil.isHoliday(new Date(2019, 5, 20))).toBeTruthy(); // Corpus Christi
    expect(DateUtil.isHoliday(new Date(2020, 0, 1))).toBeTruthy(); // New Year Day
    expect(DateUtil.isHoliday(new Date(2020, 0, 6))).toBeTruthy(); // Three Kings Day
    expect(DateUtil.isHoliday(new Date(2020, 4, 1))).toBeTruthy(); // May Day
    expect(DateUtil.isHoliday(new Date(2020, 4, 3))).toBeTruthy(); // Constitution Day
    expect(DateUtil.isHoliday(new Date(2020, 7, 15))).toBeTruthy(); // Assumption of Mary
    expect(DateUtil.isHoliday(new Date(2020, 10, 1))).toBeTruthy(); // All Saints Day
    expect(DateUtil.isHoliday(new Date(2020, 10, 11))).toBeTruthy(); // Independence Day
    expect(DateUtil.isHoliday(new Date(2020, 11, 25))).toBeTruthy(); // Christmas Day
    expect(DateUtil.isHoliday(new Date(2020, 11, 26))).toBeTruthy(); // Christmas Second Day
});

test('toISO', ()=> {
    expect(DateUtil.toISO(new Date(2018, 0, 31))).toBe('2018-01-31');
    expect(DateUtil.toISO(new Date(2018, 1, 28))).toBe('2018-02-28');
    expect(DateUtil.toISO(new Date(2018, 11, 1))).toBe('2018-12-01');
    expect(DateUtil.toISO(new Date(2018, 0, 31), false)).toBe('01-31');
    expect(DateUtil.toISO(new Date(2018, 1, 28), false)).toBe('02-28');
    expect(DateUtil.toISO(new Date(2018, 11, 1), false)).toBe('12-01');
});
