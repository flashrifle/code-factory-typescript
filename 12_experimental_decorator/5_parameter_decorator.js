"use strict";
/*
    Parameter Decorator
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    constructor(name) {
        this.name = name;
    }
    dance(adj) {
        console.log(`${this.name} 가 ${adj} 춤을 춥니다.`);
    }
}
__decorate([
    __param(0, LogParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Cat.prototype, "dance", null);
const cat = new Cat('냥이');
cat.dance('신나게');
function LogParam(target, propertyKey, pramIndex) {
    console.log(`${pramIndex} 번쨰 파라미터인 ${propertyKey}가 입력 됐습니다.`);
}
