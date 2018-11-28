import partial from './partial';
import pipe from './pipe';

const add = (a:number, b:number)=> a + b,
      mul = (a:number, b:number)=> a * b,
      inc = (num:number)=> num + 1;

test('pipe', ()=> {
    expect(pipe(add, partial(mul, 5))(5, 5)).toBe(50);
    expect(pipe(add)(5, 5)).toBe(10);
    expect(pipe(add, inc)(5, 5)).toBe(11);
});
