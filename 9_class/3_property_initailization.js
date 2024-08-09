"use strict";
/*
    property Initializaion
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, pet) {
        // 초기값 제공 선언법
        this.age = 20;
        this.name = name;
        this.pet = pet;
    }
}
class RouteStack {
    constructor() {
        this.initialize();
    }
    initialize() {
        this.stack = [];
    }
}
const routeStack = new RouteStack();
console.log(routeStack);
