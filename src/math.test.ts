import {rndRange, rndIntRange, rndSign} from './math';

test('rndRange', ()=> {
    expect(rndRange(0, 0.5)).toBeGreaterThanOrEqual(0);
    expect(rndRange(0, 0.5)).toBeLessThanOrEqual(0.5);
    expect(rndRange(0.15, 0.155)).toBeCloseTo(0.15);
});

test('rndIntRange', ()=> {
    expect(rndIntRange(0, 5)).toBeGreaterThanOrEqual(0);
    expect(rndIntRange(0, 5)).toBeLessThanOrEqual(5);
    expect(rndIntRange(5, 5)).toBe(5);
});

test('rndSign', ()=> {
    const sign = rndSign();
    expect(sign).toBe(sign > 0 ? 1 : -1);
});
