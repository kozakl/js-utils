import {isFill, isEmail, validateBoolean} from './validate';

test('isFill', ()=> {
    expect(isFill(undefined)).toEqual(false);
    expect(isFill(' ')).toEqual(false);
    expect(isFill('')).toEqual(false);
    expect(isFill('sample')).toEqual(true);
});

test('isEmail', ()=> {
    expect(isEmail(undefined)).toEqual(false);
    expect(isEmail('sample')).toEqual(false);
    expect(isEmail('sample@')).toEqual(false);
    expect(isEmail('sample@.')).toEqual(false);
    expect(isEmail('sample@.com')).toEqual(false);
    expect(isEmail('sample@gmail')).toEqual(false);
    expect(isEmail('@gmail')).toEqual(false);
    expect(isEmail('@gmail.com')).toEqual(false);
    expect(isEmail('sample@gmail.com')).toEqual(true);
});

test('validateBoolean', ()=> {
    expect(validateBoolean(true)).toEqual(true);
    expect(validateBoolean(1)).toEqual(true);
    expect(validateBoolean(' ')).toEqual(false);
    expect(validateBoolean('')).toEqual(false);
    expect(validateBoolean('false')).toEqual(false);
    expect(validateBoolean('2')).toEqual(false);
    expect(validateBoolean('1')).toEqual(true);
    expect(validateBoolean('true')).toEqual(true);
});
