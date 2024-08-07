"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner = (callback) => {
    return ['안유진', '장원영', '레이'].map(callback);
};
console.log(runner((x) => `아이브 멤버: ${x}`));
const multiplyTwoNumbers = (x, y) => {
    return x + y;
};
const multiplyTwoNumbers3 = (x, y) => {
    return x + y;
};
