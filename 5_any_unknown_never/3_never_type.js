"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Never
 */
// 1. 함수에서 에러를 던질 때
function throwError() {
    throw Error();
}
// 2. 무한 루프
function infiniteLoop() {
    while (true) {
    }
}
// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;
