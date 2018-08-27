import ArrayUtil from './ArrayUtil';

test('shuffle', ()=> {
    const original = [1, 2, 3, 4, 5],
          shuffled = ArrayUtil.shuffle(original.concat());
    
    expect(shuffled.length).toEqual(original.length);
    expect(shuffled).toEqual(expect.arrayContaining(original));
    expect(shuffled).not.toEqual(original);
});
