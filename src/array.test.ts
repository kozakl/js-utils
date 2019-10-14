import {first, last, removeNull,
        emptyNull, shuffle} from './array';

test('first', ()=> {
    expect(first([])).toEqual(undefined);
    expect(first([1, 2])).toEqual(1);
});

test('last', ()=> {
    expect(last([])).toEqual(undefined);
    expect(last([1, 2])).toEqual(2);
});

test('removeNull', ()=> {
    const original = [null, 1, null, 3, null],
          cleaned = removeNull(original.concat());
    
    expect(cleaned).not.toEqual(expect.arrayContaining([null]));
});

test('emptyNull', ()=> {
    expect(emptyNull([1, 2])).toEqual([1, 2]);
    expect(emptyNull([])).toEqual(null);
});

test('shuffle', ()=> {
    const original = [1, 2, 3, 4, 5],
          shuffled = shuffle(original.concat());
    
    expect(shuffled.length).toEqual(original.length);
    expect(shuffled).toEqual(expect.arrayContaining(original));
    expect(shuffled).not.toEqual(original);
});
