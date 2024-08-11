"use strict";
/*
    Method 에서 Generic 사용하기
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Idol {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello(logTime) {
        return `[${logTime}] 안녕하세요 제 이름은 ${this.name} 이고, ID는 ${this.id} 입니다.`;
    }
}
const yujin = new Idol('a999', '안유진');
console.log(yujin.sayHello('2023'));
console.log(yujin.sayHello(1999));
class Message {
    sayHello(logTime, message) {
        console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
    }
}
const message = new Message();
message.sayHello(1111, 'Hi');
class DuplicatedGenericName {
    sayHello(logTime) {
        console.log(`logTime: ${typeof logTime}`);
    }
}
const duplicate = new DuplicatedGenericName();
duplicate.sayHello(123);
