import {rndRange} from './math';

test('rndRange', ()=> {
    expect(rndRange(0, 0.5)).toBeGreaterThanOrEqual(0);
    expect(rndRange(0, 0.5)).toBeLessThanOrEqual(0.5);
    expect(rndRange(0.15, 0.155)).toBeCloseTo(0.15);
});
