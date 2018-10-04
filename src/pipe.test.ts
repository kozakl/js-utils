import partial from './partial';
import pipe from './pipe';

const add = (a:number, b:number)=> a + b,
      mul = (a:number, b:number)=> a * b,
      inc = (num:number)=> num + 1;

describe('pipe', ()=> {
    test('test1 single method', ()=> {
        expect(pipe(add)(5, 5)).toBe(10);
    });
    test('test2 multiple methods', ()=> {
        expect(pipe(add, inc)(5, 5)).toBe(11);
    });
    test('test3 with partial', ()=> {
        expect(pipe(add, partial(mul, 5))(5, 5)).toBe(50);
    });
});
