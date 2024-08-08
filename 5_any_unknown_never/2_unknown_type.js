"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Unknown Type
 */
let anyValue;
anyValue = 24;
anyValue = '1234';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
let unknownValue;
unknownValue = 24;
unknownValue = '1234';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;
// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;
anyValue.toUpperCase();
anyValue.name;
new anyValue();
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();
function isString(target) {
    return typeof target === 'string';
}
let testVal;
if (isString(testVal)) {
    testVal;
}
/*
    Operator 사용
    사칙연산은 불가능하다, 서로 같은지 같지않은지 비교만 가능
 */
let number1 = 10;
let number2 = 20;
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
