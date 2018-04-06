import classNames from '../../src/utils/classNames';

describe('classNames', ()=> {
    test('test1', ()=> expect(classNames('class1', 'class2')).toBe('class1 class2'));
    test('test2', ()=> {
        const data = {
          val1: true,
          val2: false  
        };
        expect(classNames(
            data.val1 && 'class1',
            data.val2 && 'class2',
            'class3'
        )).toBe('class1 class3')
    });
});
