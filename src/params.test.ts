import {setParams} from './params';

test('setParams', ()=> {
    expect(setParams({name: 'John', lastname: 'Smith'})).toBe('name=John&lastname=Smith');
    expect(setParams({email: 'john@gmail.com'})).toBe('email=john%40gmail.com');
});
