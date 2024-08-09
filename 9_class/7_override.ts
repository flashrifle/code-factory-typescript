/*
    Override
 */

class Parent {
    shout(name: string) {
        return `${name}아 안녕`
    }
}

class WrongChild extends Parent {
    // 1. 부모 메서드와 변환 타입이 일치해야함
    // 2. 부모 메서드에 필수인 파라미터가 존재해야함
    // 3. 부모 메서드에서 Optional 인 파라미터들이 자식에서 필수로 지정되면 안됨
    // shout() {
    //
    // }
}

class Child extends Parent {
    shout(name: string, me?: string):string {
        if(!me) {
            return super.shout(name);
        } else {
            return  super.shout(name) + `내 이름은 ${me}야`
        }
    }
}

const child = new Child()
console.log(child.shout('아이유'));
console.log(child.shout('아이유', '바보'));

/*
    속성 override
 */

class PropertyParent {
    name: string;

    constructor(name: string) {
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
    name?: string | number | undefined;

    constructor(name: string | number) {
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2 {
    name: string;

    constructor(name: string) {
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('gkdl');
child2.name;