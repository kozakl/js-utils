import {lowerFirst, upperFirst,
        remove, padNum1, padNum2,
        pad, padStart, padEnd} from './string';

test('lowerFirst', ()=> {
    expect(lowerFirst('sample')).toEqual('sample');
    expect(lowerFirst('Sample')).toEqual('sample');
    expect(lowerFirst('SAMPLE')).toEqual('sAMPLE');
});

test('upperFirst', ()=> {
    expect(upperFirst('Sample')).toEqual('Sample');
    expect(upperFirst('sample')).toEqual('Sample');
    expect(upperFirst('SAMPLE')).toEqual('SAMPLE');
});

test('remove', ()=> {
    expect(remove('sample abc text', 0, 7)).toEqual('abc text');
    expect(remove('sample abc text', 7, 11)).toEqual('sample text');
    expect(remove('sample abc text', 10, 15)).toEqual('sample abc');
});

test('padNum1', ()=> {
    expect(padNum1(1)).toEqual('01');
    expect(padNum1(10)).toEqual('10');
    expect(padNum1(100)).toEqual('100');
});

test('padNum2', ()=> {
    expect(padNum2(1)).toEqual('001');
    expect(padNum2(10)).toEqual('010');
    expect(padNum2(100)).toEqual('100');
});

test('pad', ()=> {
    expect(pad('', 0)).toEqual('');
    expect(pad('', 1)).toEqual('');
    expect(pad('', 2)).toEqual('  ');
    expect(pad('', 5, '-')).toEqual('----');
    expect(pad('sample', 1)).toEqual('s');
    expect(pad('sample', 10)).toEqual('  sample  ');
    expect(pad('sample', 9, '_')).toEqual('_sample_');
    expect(pad('sample', 10, '_')).toEqual('__sample__');
    expect(pad('sample', 11, '_')).toEqual('__sample__');
    expect(pad('sample', 12, '_')).toEqual('___sample___');
});

test('padStart', ()=> {
    expect(padStart('', 0)).toEqual('');
    expect(padStart('', 1)).toEqual(' ');
    expect(padStart('', 5, '-')).toEqual('-----');
    expect(padStart('sample', 1)).toEqual('s');
    expect(padStart('sample', 10)).toEqual('    sample');
    expect(padStart('sample', 10, '_')).toEqual('____sample');
});

test('padEnd', ()=> {
    expect(padEnd('', 0)).toEqual('');
    expect(padEnd('', 1)).toEqual(' ');
    expect(padEnd('', 5, '-')).toEqual('-----');
    expect(padEnd('sample', 1)).toEqual('s');
    expect(padEnd('sample', 10)).toEqual('sample    ');
    expect(padEnd('sample', 10, '_')).toEqual('sample____');
});
