/*
    readonly 프로퍼티
 */

class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yujin = new Idol('유진', 23)

yujin.age;
// yujin.name = '1111'; 수정불가.