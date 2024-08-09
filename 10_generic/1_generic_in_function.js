"use strict";
/*
    Generic 함수에서 사용하기
 */
Object.defineProperty(exports, "__esModule", { value: true });
function whatValue(value) {
    return value;
}
const value = whatValue('value');
function genericWhatValue(value) {
    return value;
}
const genericResult = genericWhatValue('1234');
let genericResult2 = genericWhatValue('1234');
function multipleGenerics(x, y, z) {
    return { x, y, z };
}
const multipleGenericResult = multipleGenerics(123, true, '123');
const multipleGenericResult2 = multipleGenerics(123, true, '123');
function getTuple(val1, val2) {
    return [val1, val2];
}
const tuple = getTuple(true, 100);
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Car {
    constructor(brand, codeName) {
        this.brand = brand;
        this.codeName = codeName;
    }
}
function instantiator(constructor, ...args) {
    return new constructor(...args);
}
console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 2311));
