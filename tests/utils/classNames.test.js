import classNames from '../../src/utils/classNames';

describe('classNames', ()=> {
    test('test1', ()=> expect(classNames('class1', 'class2')).toBe('class1 class2'));
    test('test2', ()=> expect(classNames(true && 'class1', false && 'class2', 'class3')).toBe('class1 class3'));
});
