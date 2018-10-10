import {pointOnCubicCurve, pointOnCubicCurveX,
        pointOnCubicCurveY, pointOnQuadCurve} from './bezier';

test('pointOnCubicCurve', ()=> {
    const result = pointOnCubicCurve(1, 1, 10, 10, -10, -10, 1, 1, 0.5, {});
    expect(result).toEqual({x: 0.25, y: 0.25});
});

test('pointOnCubicCurveX', ()=> {
    const result = pointOnCubicCurveX(1, 10, -10, 1, 0.5);
    expect(result).toEqual(0.25);
});

test('pointOnCubicCurveY', ()=> {
    const result = pointOnCubicCurveX(1, 10, -10, 1, 0.5);
    expect(result).toEqual(0.25);
});

test('pointOnQuadCurve', ()=> {
    const result = pointOnQuadCurve(1, 1, 10, 10, 1, 1, 0.5, {});
    expect(result).toEqual({x: 5.5, y: 5.5});
});
