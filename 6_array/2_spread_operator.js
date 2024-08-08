"use strict";
/*
    Spread Operator
 */
Object.defineProperty(exports, "__esModule", { value: true });
const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3, 4, 5];
const arr1 = [
    ...onlyString
];
const arr2 = [
    ...onlyString,
    ...onlyNumbers
];
