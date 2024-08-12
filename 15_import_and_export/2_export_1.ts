/*
    Export
    export default 가 아닌 export 를 사용하려면 명칭을 그대로 가져가야함.
 */
export class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export const rose = new IdolModel('로제',28);

export const number = 99;

export interface ICat {
    name: string;
    age: number;
}