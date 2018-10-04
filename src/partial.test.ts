import partial from './partial';

const add = (a:number, b:number)=> a + b,
      inc = (num:number)=> num + 1;

describe('partial', ()=> {
    test('test1 multi args', ()=> {
        expect(partial(add, 10, 10)()).toBe(20);
    });
    test('test2 one arg', ()=> {
        expect(partial(inc, 10)()).toBe(11);
    });
});
