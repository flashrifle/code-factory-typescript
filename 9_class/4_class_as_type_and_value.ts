/*
    Class as Type and Value
    // 클래스가 타입이 될 수도 있다.
 */

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}이 짖습니다.`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark())

// ori = '오리';

// 같은 시그니처라면 해당하는 클래스로 인식
ori = {
   name: '별이',
   bark() {
       return `${this.name}이 짖습니다.`;
   }
}
console.log(ori.bark())