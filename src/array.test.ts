import {removeNull, shuffle} from './array';

test('removeNull', ()=> {
    const original = [null, 1, null, 3, null],
          cleaned = removeNull(original.concat());
    
    expect(cleaned).not.toEqual(expect.arrayContaining([null]));
});

test('shuffle', ()=> {
    const original = [1, 2, 3, 4, 5],
          shuffled = shuffle(original.concat());
    
    expect(shuffled.length).toEqual(original.length);
    expect(shuffled).toEqual(expect.arrayContaining(original));
    expect(shuffled).not.toEqual(original);
});
