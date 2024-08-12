"use strict";
/*
    Class Decorator
    클래스에 데코레이터를 입히면 클래스를 실행될 때 딱 한번만 실행됨.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
let Idol = class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Idol = __decorate([
    Test,
    Frozen,
    LogTest('PRODUCTION'),
    ChangeClass,
    __metadata("design:paramtypes", [String, Number])
], Idol);
function Test(constructor) {
    console.log(constructor);
}
function Frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
const yujin = new Idol('안유진', 23);
console.log(Object.isFrozen(Object.getPrototypeOf(yujin)));
// decorator factory
function LogTest(env) {
    return function (constructor) {
        console.log(`[${env}] ${constructor} 가 실행됐습니다.`);
    };
}
console.log('-------------------------');
const wonYoung = new Idol('장원영', 22);
console.log(wonYoung);
function ChangeClass(constructor) {
    return class extends constructor {
        constructor(...params) {
            super(...params);
            this.groupName = '아이브';
            console.log('constructor instantiated');
        }
    };
}
