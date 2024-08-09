"use strict";
/*
    Override
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    shout(name) {
        return `${name}아 안녕`;
    }
}
class WrongChild extends Parent {
}
class Child extends Parent {
    shout(name, me) {
        if (!me) {
            return super.shout(name);
        }
        else {
            return super.shout(name) + `내 이름은 ${me}야`;
        }
    }
}
const child = new Child();
console.log(child.shout('아이유'));
console.log(child.shout('아이유', '바보'));
/*
    속성 override
 */
class PropertyParent {
    constructor(name) {
        this.name = name;
    }
}
// class PropertyChild extends Parent {
//     name: number;
//
//     constructor(name: number) {
//         this.name = name;
//     }
// }
class PropertyParent2 {
    constructor(name) {
        this.name = name;
    }
}
class PropertyChild2 extends PropertyParent2 {
    constructor(name) {
        super(name);
        this.name = name;
    }
}
const child2 = new PropertyChild2('gkdl');
child2.name;
