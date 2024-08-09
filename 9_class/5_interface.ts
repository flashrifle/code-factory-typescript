/*
    Interface
 */

interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    age: number;
    name: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name} 가 점프한다`;
    }

}

let ori: any = new Dog('오리', 3)

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if(instanceOfAnimal(ori)){
    ori;
}

/*
    다중 인터페이스 구현
 */

interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프 합니다.`
    }

    bark() {
        console.log('mya')
    }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프 합니다.`
    }

    bark() {
        console.log('mya')
    }
}

interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     name: string;
//     name: number;
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new (name: string, age: number):Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    return new constructor(name, age)
}

console.log(createIdol(Idol, '아이유', 23));