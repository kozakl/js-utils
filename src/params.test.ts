import params from './params';

test('params', ()=> {
    expect(params({name: 'John', lastname: 'Smith'})).toBe('name=John&lastname=Smith');
    expect(params({email: 'john@gmail.com'})).toBe('email=john%40gmail.com');
});
