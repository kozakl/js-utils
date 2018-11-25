import range from './range';

test('range', ()=> {
    expect(range(0, 4, 1)).toEqual([0, 1, 2, 3, 4]);
    expect(range(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 40, 10)).toEqual([0, 10, 20, 30, 40]);
    expect(range(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
});
