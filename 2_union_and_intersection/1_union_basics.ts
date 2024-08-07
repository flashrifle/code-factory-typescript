/*
    Union Basics
    유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;
// stringOrBooleanType = undefined;

type StringBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/*
    리스트의 유니언
 */
// string or bool 로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

// 각 리스트의 타입이 독립적일 때
let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김김김',
    '아이아'
]

strListOrBooleanList = [
    true,
    false,
    true
]

// strListOrBooleanList = [
//     true,
//     'did'
// ]

// 리스트의 타입을 여러개 지정하고 싶을 때
type StrOrNumberList = (string | number)[];

let stringOrNumberList:StrOrNumberList = [
    1,2,3,4,'1234'
]

/*
    인터페이스로 사용하는 유니언
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '리리리',
    age: 30,
    address: '대한민국'
}

// animalOrHuman 의 타입이 Human 인 이뉴는 animalOrHuman에
// address 속성이 들어가므로 TS에서 휴먼으로 추론하게 됨
console.log(animalOrHuman)
console.log(animalOrHuman.name)
console.log(animalOrHuman.age)
console.log(animalOrHuman.address)

animalOrHuman = {
    name:'오리',
    age:9,
}
console.log(animalOrHuman)

console.log(animalOrHuman.name)
console.log(animalOrHuman.age)
// console.log(animalOrHuman.address) 오리로 초기화가 됐기 때문에 address 속성 사용불가

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '이재민',
    age: 30,
    address: '서울'
}

console.log(animalOrHuman2.address)
console.log(animalOrHuman2.name)
console.log(animalOrHuman2.age)

animalOrHuman2 = {
    name: '오리',
    age: 9
}

// console.log(animalOrHuman2.address)
console.log(animalOrHuman2.name)
console.log(animalOrHuman2.age)

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string,
    country: string,
}

type PersonOrCat = Person | Cat; // 합집합의 개념이다.

// 어떤 타입인지 추론이 가능한 속성이면 괜찮으나, 두개의 타입 중 어느 하나라도 없는 값만 남게 되면 에러.
const personOrCat: PersonOrCat = {
    name: '리리리',
    age: 30,
    // breed: 'York',
    // country: 'british'
}