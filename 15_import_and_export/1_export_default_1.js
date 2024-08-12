"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Export
    export default 는 파일당 한 번만 사용가능
 */
class IdolModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const number = 12;
// 여러가지를 내보내고 싶을때 사용
// 대신 interface 는 불가능함 -> typescript 타입이므로 객체가 될 수 없음
exports.default = {
    IdolModel,
    number
};
