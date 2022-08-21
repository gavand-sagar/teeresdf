function addition(a, b) {
    return a + b;
}

function makeUpperCase(value) {
    return value.toUpperCase();
}

function makeCapitalCase(value) {
    if (value === undefined) {
        return;
    }
    if (value === '') {
        return ''
    }
    // 
    let firstPart = value[0];
    let restOfString = value.slice(1, value.length);

    let result = firstPart.toUpperCase() + restOfString.toLowerCase();
    return result;
}


function sortArray(array) {
    for (let counter = 0; counter < array.length; counter++) {

        for (let index = 0; index < array.length - 1; index++) {
            const current = array[index];
            const next = array[index + 1];

            if (current > next) {
                //swapping of current and next
                array[index] = next;
                array[index + 1] = current;
            }
        }

    }
    return array;
}


module.exports = { addition, makeUpperCase, makeCapitalCase, sortArray }