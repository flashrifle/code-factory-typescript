"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = exports.rose = exports.IdolModel = void 0;
/*
    Export
    export default 가 아닌 export 를 사용하려면 명칭을 그대로 가져가야함.
 */
class IdolModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.IdolModel = IdolModel;
exports.rose = new IdolModel('로제', 28);
exports.number = 99;
exports.default = {
    name: '이름',
    age: 33
};
