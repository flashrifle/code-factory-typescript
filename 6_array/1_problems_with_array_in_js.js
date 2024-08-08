"use strict";
/*
    problems with array in JS
 */
Object.defineProperty(exports, "__esModule", { value: true });
const number = [1, '2', 3, '4', 5];
let strings = ['1', '2', '3'];
// strings.push(1);
let stringsOrNumbersArray = [1, 2, 3, '4', 5];
let stringArrNumberArr = [
    '1', '2', '3'
];
stringArrNumberArr = [1, 2, 3];
let stringOrNumberArr = [1, 2, 3];
stringOrNumberArr = '111';
let boolsArr = [true, false, true];
const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];
for (let i = 0; i < onlyString.length; i++) {
    let item = onlyString[i];
}
for (let item of onlyNumbers) {
}
let number3 = onlyNumbers[0];
let number4 = onlyNumbers[9999];
