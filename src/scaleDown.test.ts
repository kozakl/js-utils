import scaleDown from './scaleDown';

test('scaleDown', ()=> {
    expect(scaleDown(1, 100, 100)).toEqual({x: 100, y: 100});
    expect(scaleDown(0.5, 100, 100)).toEqual({x: 50, y: 100});
    expect(scaleDown(0.5, 50, 50)).toEqual({x: 25, y: 50});
});
