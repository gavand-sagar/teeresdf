const { sortArray } = require('./index.js')

test('it should sort an array', () => {
    let testArray = [4, 2, 3, 1];
    let sortedArray = sortArray(testArray);

    expect(sortedArray).toEqual([1, 2, 3, 4])

})

test('it should sort an array', () => {
    let testArray = [44, 200, -3, 10];
    let sortedArray = sortArray(testArray);

    expect(sortedArray).toEqual([-3, 10, 44, 200])

   
    expect(sortedArray).not.toBeNull();


})