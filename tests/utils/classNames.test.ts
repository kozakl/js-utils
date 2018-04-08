import classNames from '../../src/utils/classNames';

test('classNames', ()=> {
    expect(classNames('class1', 'class2')).toBe('class1 class2');
    expect(classNames(
        !!1 && 'class1',
        !!0 && 'class2',
        'class3'
    )).toBe('class1 class3')
});
