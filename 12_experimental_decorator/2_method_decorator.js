"use strict";
/*
    Method Decorator
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
class Idol {
    constructor(name) {
        this.name = name;
    }
    dance() {
        return `${this.name} 가 춤을 춥니다`;
    }
}
__decorate([
    TestMethodDecorator,
    Configurable(false),
    MethodCallLogger('PROD'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Idol.prototype, "dance", null);
// target - static 메서드에 데코레이팅을 할 경우 생성자 함수
//        - instance 메서드에 데코레이팅 할 경우 인스턴스의 prototype
// propertyKey - 메서드의 이름
// descript - property descriptor
function TestMethodDecorator(target, propertyKey, descriptor) {
    console.log('LogCall');
    console.log('---target Call---');
    console.log(target);
    console.log('---propertyKey---');
    console.log(propertyKey);
    console.log('---descriptor---');
    console.log(descriptor);
}
const rose = new Idol('로제');
console.log('----run dance----');
rose.dance();
function Configurable(configurable) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = configurable;
    };
}
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
function MethodCallLogger(env) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`[${env}] running function: ${propertyKey}`);
            const result = originalMethod.apply(this, ...args);
            return result;
        };
    };
}
console.log(rose.dance());
