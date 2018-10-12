import partial from './partial';

const inc = (num:number)=> num + 1,
      add = (a:number, b:number)=> a + b;

describe('partial', ()=> {
    expect(partial(inc, 10)()).toBe(11);
    expect(partial(add, 10, 10)()).toBe(20);
});
