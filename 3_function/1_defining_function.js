"use strict";
/*
    Defining Function
 */
Object.defineProperty(exports, "__esModule", { value: true });
function printName(name) {
    console.log(name);
}
function returnToCouples(person1, person2) {
    return `${person1}과 ${person2}는 사귀고 있습니다`;
}
console.log(returnToCouples('아이유', '홍길동'));
returnToCouples('1234', '2222');
/*
    Optional Parameter
 */
function multiplyOrReturn(x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x;
    }
}
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));
function multiplyOrReturn2(x, y = 20) {
    return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));
/*
    나머지 매개변수
 */
function getInfiniteParameters(...args) {
    return args.map((x) => `너무좋아 ${x}`);
}
console.log(getInfiniteParameters('1234', ',123123'));
/*
    Return Type
 */
function addTowNumbers(x, y) {
    return x + y;
}
addTowNumbers(10, 20);
function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}
randomNumber();
function subtractTowNumbers(x, y) {
    return x - y;
}
subtractTowNumbers(10, 20);
const subtractTowNumbersArrow = (x, y) => {
    return x - y;
};
/*
    특수 반환 타입
    void / never
 */
function doNotReturn() {
    console.log('아무것도 반환하지 않는다.');
}
doNotReturn();
function neverEndingLoop() {
    while (true) {
    }
}
function throwError2() {
    throw Error();
}
