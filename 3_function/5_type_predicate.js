"use strict";
/*
    Type Predicate
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(input) {
    return typeof input === 'number';
}
console.log(isNumber(10));
function isNumberReBool(input) {
    return typeof input === 'number';
}
let number = 5;
if (isNumberReBool(number)) {
    number;
}
if (isNumber(number)) {
    number;
}
function isDoge(animal) {
    return animal.age !== undefined;
}
const doge = Math.random() > 0.5 ? {
    name: '도지',
    age: 32
} : {
    name: '오리',
    breed: '고양이'
};
if (isDoge(doge)) {
    doge;
}
else {
    doge;
}
