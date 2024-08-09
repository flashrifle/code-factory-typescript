"use strict";
/*
    Inheritance
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    constructor(name) {
        this.name = name;
    }
    dance() {
        console.log(`${this.name} 이 춤을 춘다.`);
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sing() {
        console.log(`child : ${this.name} 이 노래를 부른다.`);
    }
}
const codeFactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);
codeFactory.dance();
ahri.sing();
ahri.dance();
let person;
person = codeFactory;
person = ahri;
let person2;
person2 = ahri;
// person2 = codeFactory;
/*
    optional 프로퍼티를 유의하자
 */
class Parent2 {
    constructor(name) {
        this.name = name;
    }
}
class Child2 extends Parent2 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const cf2 = new Parent2('asdf');
const a2 = new Child2('ari', 24);
let child;
child = a2;
// 자식이 부모가 되는 경우는
// age? 부분 처럼 optional 일 때 값이 존재 할 수도 있고, 없기 때문에
// 구조가 똑같아 질 때 가능하다
child = cf2;
