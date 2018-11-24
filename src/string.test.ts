import {lowerFirst, upperFirst,
        removeSubstr, pad1} from './string';

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
