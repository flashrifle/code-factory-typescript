"use strict";
/*
    Loopholes of any
 */
Object.defineProperty(exports, "__esModule", { value: true });
let number;
number = 10;
// (number as any).toUpperCase();
const multiplyTow = (x, y) => {
    return x * y;
};
let args1 = '코드팩토리';
let args2 = true;
multiplyTow(args1, args2);
// multiplyTow('a', args2)
let iu = { name: '아이유', age: 30 };
iu;
const callbackRunner = (x, y, callback) => {
    return callback(x, y);
};
const callback = (x, y) => {
    return x * y;
};
console.log(callbackRunner(5, 3, callback));
