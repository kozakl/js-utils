import {lowerFirst} from './string';

test('lowerFirst', ()=> {
    expect(lowerFirst('sample')).toEqual('sample');
    expect(lowerFirst('Sample')).toEqual('sample');
    expect(lowerFirst('SAMPLE')).toEqual('sAMPLE');
});
