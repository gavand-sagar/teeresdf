// import { addition } from "./index.js";
const { addition, makeUpperCase, makeCapitalCase } = require('./index.js')

it('if addition gives a proper result', () => {
    let result = addition(3, 4)
    expect(result).toBe(7)
})


test('if addition gives a proper result', () => {
    let result = addition(30, 4)
    expect(result).toBe(34)
})

test('if addition gives a proper result', () => {
    let result = addition(30, 50)
    expect(result).toBe(80)
})


test('if upper case method works properly', () => {
    let result = makeUpperCase('sagar')
    expect(result).toBe("SAGAR")
})




test('if makeCapitalCase works', () => {
    let result = makeCapitalCase('sagar');
    expect(result).toBe('Sagar')
})

test('if makeCapitalCase works', () => {
    let result = makeCapitalCase('saGar');
    expect(result).toBe('Sagar')
})

test('if makeCapitalCase works', () => {
    let result = makeCapitalCase('SaGar');
    expect(result).toBe('Sagar')
})

test('if makeCapitalCase works', () => {
    let result = makeCapitalCase('chriS');
    expect(result).toBe('Chris')
})

test('if makeCapitalCase works', () => {
    let result = makeCapitalCase('NITIN');
    expect(result).toBe('Nitin')
})


test('to check empty string ', () => {
    let result = makeCapitalCase('');
    expect(result).toBe('')
})


test('to check undefined string ', () => {
    let result = makeCapitalCase();
    expect(result).toBeUndefined();
})

test('to check a string with special characters ', () => {
    let result = makeCapitalCase();
    expect(result).toBeUndefined();
})




