import {isFill, isEmail, toBoolean} from './validate';

test('isFill', ()=> {
    expect(isFill(' ')).toEqual(false);
    expect(isFill('')).toEqual(false);
    expect(isFill('sample')).toEqual(true);
});

test('isEmail', ()=> {
    expect(isEmail('sample')).toEqual(false);
    expect(isEmail('sample@')).toEqual(false);
    expect(isEmail('sample@.')).toEqual(false);
    expect(isEmail('sample@.com')).toEqual(false);
    expect(isEmail('sample@gmail')).toEqual(false);
    expect(isEmail('@gmail')).toEqual(false);
    expect(isEmail('@gmail.com')).toEqual(false);
    expect(isEmail('sample@gmail.com')).toEqual(true);
});

test('toBoolean', ()=> {
    expect(toBoolean(' ')).toEqual(false);
    expect(toBoolean('')).toEqual(false);
    expect(toBoolean('false')).toEqual(false);
    expect(toBoolean('2')).toEqual(false);
    expect(toBoolean('1')).toEqual(true);
    expect(toBoolean('true')).toEqual(true);
});
