import {rndRange, rndIntRange, rndSign,
        clamp, fabs, abs, sign} from './math';

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

test('clamp', ()=> {
    expect(clamp(10, 2.5, 7.5)).toBe(7.5);
    expect(clamp(1, 2.5, 7.5)).toBe(2.5);
    expect(clamp(-10, -2.5, -7.5)).toBe(-2.5);
    expect(clamp(-1, -2.5, -7.5)).toBe(-2.5);
});

test('fabs', ()=> {
    expect(fabs(10)).toBe(10);
    expect(fabs(-10)).toBe(10);
    expect(fabs(2.5)).toBe(2.5);
    expect(fabs(-2.5)).toBe(2.5);
});

test('abs', ()=> {
    expect(abs(10)).toBe(10);
    expect(abs(-10)).toBe(10);
    expect(abs(2.5)).toBe(2);
    expect(abs(-2.5)).toBe(2);
});

test('sign', ()=> {
    expect(sign(10)).toBe(1);
    expect(sign(-10)).toBe(-1);
    expect(sign(10.5)).toBe(1);
    expect(sign(-10.5)).toBe(-1);
    expect(sign(0)).toBe(0);
});
