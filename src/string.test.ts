import {lowerFirst, upperFirst,
        removeSubstr, pad1, pad2,
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

test('removeSubstr', ()=> {
    expect(removeSubstr('sample abc text', 0, 7)).toEqual('abc text');
    expect(removeSubstr('sample abc text', 7, 11)).toEqual('sample text');
    expect(removeSubstr('sample abc text', 10, 15)).toEqual('sample abc');
});

test('pad1', ()=> {
    expect(pad1(1)).toEqual('01');
    expect(pad1(10)).toEqual('10');
    expect(pad1(100)).toEqual('100');
});

test('pad2', ()=> {
    expect(pad2(1)).toEqual('001');
    expect(pad2(10)).toEqual('010');
    expect(pad2(100)).toEqual('100');
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
