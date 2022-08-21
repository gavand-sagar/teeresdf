const { Stack } = require('./stack/index.js')

test('if stack is getting created', () => {
    let stack = new Stack();
    expect(stack).not.toBeUndefined();
    expect(stack).not.toBeNull();
    expect(stack).not.toBeFalsy();
})

test('it should add single item in stack', () => {
    let stack = new Stack();

    stack.push('sagar');
    expect(stack.length()).toBe(1)

    stack.push('nitin');
    expect(stack.length()).toBe(2)

});

test('to check length is getting decremented while pop', () => {
    let stack = new Stack();
    stack.push('sagar');
    stack.push('nitin');

    expect(stack.length()).toBe(2);
    stack.pop()
    expect(stack.length()).toBe(1)
    stack.pop()
    expect(stack.length()).toBe(0)
})


test('to check the top method', () => {
    let stack = new Stack();
    stack.push('sagar');

    let top = stack.top();

    expect(top).toBe('sagar')
})

test('to check the top method', () => {
    let stack = new Stack();
    stack.push('sagar');
    stack.push('nitin');

    let top = stack.top();
    expect(top).toBe('nitin')

})

