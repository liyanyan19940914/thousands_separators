'use strict';

function thousands_separators(num) {
    var stringArray = num.toString().split('.');
    var integerString = buildIntegerString(stringArray);
    var string = printString(integerString, stringArray);

    return string;
}

function buildIntegerString(stringArray) {
    var integerArray = stringArray[0].split('');
    var array = addSymbol(integerArray);
    var integerString = outputString(array);

    return integerString;
}

function addSymbol(integerArray) {
    var j = 0;
    var n = 0;
    var array = [];
    for (var i = integerArray.length - 1; i >= 0; i--) {
        if (j % 3 === 0 && j != 0) {
            array[n] = ",";
            n++;
        }
        j++;
        array[n] = integerArray[i];
        n++;
    }

    return array;
}

function outputString(array) {
    var integerString = '';
    for (var i = array.length - 1; i >= 0; i--) {
        integerString += array[i];
    }
    return integerString;
}

function printString(integerString, stringArray) {
    var print = '';
    print += integerString;
    if (stringArray.length != 1) {
        print += '.' + stringArray[1];
    }

    return print;
}
module.exports = thousands_separators;
