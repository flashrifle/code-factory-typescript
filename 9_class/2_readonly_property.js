"use strict";
/*
    readonly 프로퍼티
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const yujin = new Idol('유진', 23);
yujin.age;
// yujin.name = '1111'; 수정불가.
