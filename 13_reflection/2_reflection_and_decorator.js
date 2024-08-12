"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Reflection and Decorator
 */
require("reflect-metadata");
const restrictParamValueKey = Symbol('restrictParamValue');
function RestrictParamValue(restrictedValues) {
    return (target, propertyKey, index) => {
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
        const info = {
            index,
            restrictedValues,
        };
        Reflect.defineMetadata(restrictParamValueKey, [...prevMeta, info], target, propertyKey);
        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    };
}
function ValidateMethod(target, propertyKey, descriptor) {
    const metas = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
    const original = descriptor.value;
    descriptor.value = function (...args) {
        const invalids = metas.filter((x) => !x.restrictedValues.includes(args[x.index]));
        if (invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`);
        }
        return original.apply(this, args);
    };
}
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing(style, ranking) {
        // if(style !== '신나게' && style !== '열정적으로') {
        //     throw Error('안됨')
        // }
        return `${this.name} 이 ${style} 노래를 부릅니다.`;
    }
}
__decorate([
    ValidateMethod,
    __param(0, RestrictParamValue(['신나게', '열정적으로'])),
    __param(1, RestrictParamValue([1, 2, 3])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Idol.prototype, "sing", null);
const yujin = new Idol('안유진', 23);
console.log('---sing---');
console.log(yujin.sing('신나게', 1));
console.log(yujin.sing('열정적으로', 2));
console.log(yujin.sing('기분나쁘게', 4));
