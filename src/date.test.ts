import {monthName, monthNameAt, monthShortName,
        monthShortNameAt, dayName, dayNameAt,
        dayShortName, dayShortNameAt, daysBetween,
        isToday, isHoliday, isWeekend, toISO, toISOFull, toISOTime} from './date';

test('monthName', ()=> {
    expect(monthName(new Date(2018, 0))).toBe('Styczen');
    expect(monthName(new Date(2018, 1))).toBe('Luty');
    expect(monthName(new Date(2018, 2))).toBe('Marzec');
    expect(monthName(new Date(2018, 3))).toBe('Kwiecień');
    expect(monthName(new Date(2018, 4))).toBe('Maj');
    expect(monthName(new Date(2018, 5))).toBe('Czerwiec');
    expect(monthName(new Date(2018, 6))).toBe('Lipiec');
    expect(monthName(new Date(2018, 7))).toBe('Sierpień');
    expect(monthName(new Date(2018, 8))).toBe('Wrzesień');
    expect(monthName(new Date(2018, 9))).toBe('Październik');
    expect(monthName(new Date(2018, 10))).toBe('Listopad');
    expect(monthName(new Date(2018, 11))).toBe('Grudzień');
    expect(monthName(new Date(2018, 0), 'en')).toBe('January');
    expect(monthName(new Date(2018, 1), 'en')).toBe('February');
    expect(monthName(new Date(2018, 2), 'en')).toBe('March');
    expect(monthName(new Date(2018, 3), 'en')).toBe('April');
    expect(monthName(new Date(2018, 4), 'en')).toBe('May');
    expect(monthName(new Date(2018, 5), 'en')).toBe('June');
    expect(monthName(new Date(2018, 6), 'en')).toBe('July');
    expect(monthName(new Date(2018, 7), 'en')).toBe('August');
    expect(monthName(new Date(2018, 8), 'en')).toBe('September');
    expect(monthName(new Date(2018, 9), 'en')).toBe('October');
    expect(monthName(new Date(2018, 10), 'en')).toBe('November');
    expect(monthName(new Date(2018, 11), 'en')).toBe('December');
});

test('monthNameAt', ()=> {
    expect(monthNameAt(0)).toBe('Styczen');
    expect(monthNameAt(1)).toBe('Luty');
    expect(monthNameAt(2)).toBe('Marzec');
    expect(monthNameAt(3)).toBe('Kwiecień');
    expect(monthNameAt(4)).toBe('Maj');
    expect(monthNameAt(5)).toBe('Czerwiec');
    expect(monthNameAt(6)).toBe('Lipiec');
    expect(monthNameAt(7)).toBe('Sierpień');
    expect(monthNameAt(8)).toBe('Wrzesień');
    expect(monthNameAt(9)).toBe('Październik');
    expect(monthNameAt(10)).toBe('Listopad');
    expect(monthNameAt(11)).toBe('Grudzień');
    expect(monthNameAt(0, 'en')).toBe('January');
    expect(monthNameAt(1, 'en')).toBe('February');
    expect(monthNameAt(2, 'en')).toBe('March');
    expect(monthNameAt(3, 'en')).toBe('April');
    expect(monthNameAt(4, 'en')).toBe('May');
    expect(monthNameAt(5, 'en')).toBe('June');
    expect(monthNameAt(6, 'en')).toBe('July');
    expect(monthNameAt(7, 'en')).toBe('August');
    expect(monthNameAt(8, 'en')).toBe('September');
    expect(monthNameAt(9, 'en')).toBe('October');
    expect(monthNameAt(10, 'en')).toBe('November');
    expect(monthNameAt(11, 'en')).toBe('December');
});

test('monthShortName', ()=> {
    expect(monthShortName(new Date(2018, 0))).toBe('Sty');
    expect(monthShortName(new Date(2018, 1))).toBe('Lut');
    expect(monthShortName(new Date(2018, 2))).toBe('Mar');
    expect(monthShortName(new Date(2018, 3))).toBe('Kwi');
    expect(monthShortName(new Date(2018, 4))).toBe('Maj');
    expect(monthShortName(new Date(2018, 5))).toBe('Cze');
    expect(monthShortName(new Date(2018, 6))).toBe('Lip');
    expect(monthShortName(new Date(2018, 7))).toBe('Sie');
    expect(monthShortName(new Date(2018, 8))).toBe('Wrz');
    expect(monthShortName(new Date(2018, 9))).toBe('Paź');
    expect(monthShortName(new Date(2018, 10))).toBe('Lis');
    expect(monthShortName(new Date(2018, 11))).toBe('Gru');
});

test('monthShortNameAt', ()=> {
    expect(monthShortNameAt(0)).toBe('Sty');
    expect(monthShortNameAt(1)).toBe('Lut');
    expect(monthShortNameAt(2)).toBe('Mar');
    expect(monthShortNameAt(3)).toBe('Kwi');
    expect(monthShortNameAt(4)).toBe('Maj');
    expect(monthShortNameAt(5)).toBe('Cze');
    expect(monthShortNameAt(6)).toBe('Lip');
    expect(monthShortNameAt(7)).toBe('Sie');
    expect(monthShortNameAt(8)).toBe('Wrz');
    expect(monthShortNameAt(9)).toBe('Paź');
    expect(monthShortNameAt(10)).toBe('Lis');
    expect(monthShortNameAt(11)).toBe('Gru');
});

test('dayName', ()=> {
    expect(dayName(new Date(2018, 3, 8))).toBe('Niedziela');
    expect(dayName(new Date(2018, 3, 9))).toBe('Poniedziałek');
    expect(dayName(new Date(2018, 3, 10))).toBe('Wtorek');
    expect(dayName(new Date(2018, 3, 11))).toBe('Środa');
    expect(dayName(new Date(2018, 3, 12))).toBe('Czwartek');
    expect(dayName(new Date(2018, 3, 13))).toBe('Piątek');
    expect(dayName(new Date(2018, 3, 14))).toBe('Sobota');
    expect(dayName(new Date(2018, 3, 8), 'en')).toBe('Sunday');
    expect(dayName(new Date(2018, 3, 9), 'en')).toBe('Monday');
    expect(dayName(new Date(2018, 3, 10), 'en')).toBe('Tuesday');
    expect(dayName(new Date(2018, 3, 11), 'en')).toBe('Wednesday');
    expect(dayName(new Date(2018, 3, 12), 'en')).toBe('Thursday');
    expect(dayName(new Date(2018, 3, 13), 'en')).toBe('Friday');
    expect(dayName(new Date(2018, 3, 14), 'en')).toBe('Saturday');
});

test('dayNameAt', ()=> {
    expect(dayNameAt(0)).toBe('Niedziela');
    expect(dayNameAt(1)).toBe('Poniedziałek');
    expect(dayNameAt(2)).toBe('Wtorek');
    expect(dayNameAt(3)).toBe('Środa');
    expect(dayNameAt(4)).toBe('Czwartek');
    expect(dayNameAt(5)).toBe('Piątek');
    expect(dayNameAt(6)).toBe('Sobota');
    expect(dayNameAt(0, 'en')).toBe('Sunday');
    expect(dayNameAt(1, 'en')).toBe('Monday');
    expect(dayNameAt(2, 'en')).toBe('Tuesday');
    expect(dayNameAt(3, 'en')).toBe('Wednesday');
    expect(dayNameAt(4, 'en')).toBe('Thursday');
    expect(dayNameAt(5, 'en')).toBe('Friday');
    expect(dayNameAt(6, 'en')).toBe('Saturday');
});

test('dayShortName', ()=> {
    expect(dayShortName(new Date(2018, 3, 8))).toBe('Nd');
    expect(dayShortName(new Date(2018, 3, 9))).toBe('Pn');
    expect(dayShortName(new Date(2018, 3, 10))).toBe('Wt');
    expect(dayShortName(new Date(2018, 3, 11))).toBe('Śr');
    expect(dayShortName(new Date(2018, 3, 12))).toBe('Cz');
    expect(dayShortName(new Date(2018, 3, 13))).toBe('Pt');
    expect(dayShortName(new Date(2018, 3, 14))).toBe('Sb');
});

test('dayShortNameAt', ()=> {
    expect(dayShortNameAt(0)).toBe('Nd');
    expect(dayShortNameAt(1)).toBe('Pn');
    expect(dayShortNameAt(2)).toBe('Wt');
    expect(dayShortNameAt(3)).toBe('Śr');
    expect(dayShortNameAt(4)).toBe('Cz');
    expect(dayShortNameAt(5)).toBe('Pt');
    expect(dayShortNameAt(6)).toBe('Sb');
});

test('daysBetween', ()=> {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - 2);
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    end.setDate(end.getDate() + 1);
    const days = daysBetween([], start, end);
    
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
    expect(isToday(date)).toBeTruthy();
    
    date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() -1);
    expect(isToday(date)).toBeFalsy();
});

test('isHoliday', ()=> {
    expect(isHoliday(new Date(2018, 4, 30))).toBeFalsy();
    expect(isHoliday(new Date(2018, 3, 5))).toBeFalsy();
    expect(isHoliday(new Date(2018, 3, 7))).toBeTruthy(); // Saturday
    expect(isHoliday(new Date(2019, 2, 9))).toBeTruthy(); // Saturday
    expect(isHoliday(new Date(2018, 4, 13))).toBeTruthy(); // Sunday
    expect(isHoliday(new Date(2019, 2, 24))).toBeTruthy(); // Sunday
    expect(isHoliday(new Date(2017, 3, 17))).toBeTruthy(); // Easter Monday
    expect(isHoliday(new Date(2018, 3, 2))).toBeTruthy(); // Easter Monday
    expect(isHoliday(new Date(2019, 3, 22))).toBeTruthy(); // Easter Monday
    expect(isHoliday(new Date(2017, 5, 15))).toBeTruthy(); // Corpus Christi
    expect(isHoliday(new Date(2018, 4, 31))).toBeTruthy(); // Corpus Christi
    expect(isHoliday(new Date(2019, 5, 20))).toBeTruthy(); // Corpus Christi
    expect(isHoliday(new Date(2020, 0, 1))).toBeTruthy(); // New Year Day
    expect(isHoliday(new Date(2020, 0, 6))).toBeTruthy(); // Three Kings Day
    expect(isHoliday(new Date(2020, 4, 1))).toBeTruthy(); // May Day
    expect(isHoliday(new Date(2020, 4, 3))).toBeTruthy(); // Constitution Day
    expect(isHoliday(new Date(2020, 7, 15))).toBeTruthy(); // Assumption of Mary
    expect(isHoliday(new Date(2020, 10, 1))).toBeTruthy(); // All Saints Day
    expect(isHoliday(new Date(2020, 10, 11))).toBeTruthy(); // Independence Day
    expect(isHoliday(new Date(2020, 11, 25))).toBeTruthy(); // Christmas Day
    expect(isHoliday(new Date(2020, 11, 26))).toBeTruthy(); // Christmas Second Day
});

test('isWeekend', ()=> {
    expect(isWeekend(new Date(2018, 4, 30))).toBeFalsy();
    expect(isWeekend(new Date(2018, 3, 5))).toBeFalsy();
    expect(isWeekend(new Date(2018, 3, 7))).toBeTruthy(); // Saturday
    expect(isWeekend(new Date(2019, 2, 9))).toBeTruthy(); // Saturday
    expect(isWeekend(new Date(2018, 4, 13))).toBeTruthy(); // Sunday
    expect(isWeekend(new Date(2019, 2, 24))).toBeTruthy(); // Sunday
});

test('toISO', ()=> {
    expect(toISO(new Date(2018, 0, 31))).toBe('2018-01-31');
    expect(toISO(new Date(2018, 1, 28))).toBe('2018-02-28');
    expect(toISO(new Date(2018, 11, 1))).toBe('2018-12-01');
    expect(toISO(new Date(2018, 0, 31), false)).toBe('01-31');
    expect(toISO(new Date(2018, 1, 28), false)).toBe('02-28');
    expect(toISO(new Date(2018, 11, 1), false)).toBe('12-01');
});

test('toISOFull', ()=> {
    expect(toISOFull(new Date(2018, 0, 31, 12, 0))).toBe('2018-01-31 12:00:00');
    expect(toISOFull(new Date(2018, 1, 28, 12, 10))).toBe('2018-02-28 12:10:00');
    expect(toISOFull(new Date(2018, 11, 1, 1, 1))).toBe('2018-12-01 01:01:00');
});

test('toISOTime', ()=> {
    expect(toISOTime(new Date(2018, 0, 31, 12, 0))).toBe('12:00:00');
    expect(toISOTime(new Date(2018, 1, 28, 12, 10))).toBe('12:10:00');
    expect(toISOTime(new Date(2018, 11, 1, 1, 1))).toBe('01:01:00');
    expect(toISOTime(new Date(2018, 1, 28, 12, 10), false)).toBe('12:10');
});
