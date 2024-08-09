"use strict";
/*
    Interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    jump() {
        return `${this.name} 가 점프한다`;
    }
}
let ori = new Dog('오리', 3);
function instanceOfAnimal(object) {
    return 'jump' in object;
}
if (instanceOfAnimal(ori)) {
    ori;
}
class Cat {
    constructor(name, age, legsCount) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    jump() {
        return `${this.name}이 점프 합니다.`;
    }
    bark() {
        console.log('mya');
    }
}
class Cat2 {
    constructor(name, age, legsCount) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    jump() {
        return `${this.name}이 점프 합니다.`;
    }
    bark() {
        console.log('mya');
    }
}
// class Person implements WrongInterface1, WrongInterface2 {
//     name: string;
//     name: number;
// }
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function createIdol(constructor, name, age) {
    return new constructor(name, age);
}
console.log(createIdol(Idol, '아이유', 23));
