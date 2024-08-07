"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stringOrBooleanType = '아이브';
stringOrBooleanType = true;
let state = 'DONE';
state = 'LOADING';
// 각 리스트의 타입이 독립적일 때
let strListOrBooleanList = [
    '아이유',
    '김김김',
    '아이아'
];
strListOrBooleanList = [
    true,
    false,
    true
];
let stringOrNumberList = [
    1, 2, 3, 4, '1234'
];
let animalOrHuman = {
    name: '리리리',
    age: 30,
    address: '대한민국'
};
// animalOrHuman 의 타입이 Human 인 이뉴는 animalOrHuman에
// address 속성이 들어가므로 TS에서 휴먼으로 추론하게 됨
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);
animalOrHuman = {
    name: '오리',
    age: 9,
};
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address) 오리로 초기화가 됐기 때문에 address 속성 사용불가
let animalOrHuman2 = {
    name: '이재민',
    age: 30,
    address: '서울'
};
console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
animalOrHuman2 = {
    name: '오리',
    age: 9
};
// console.log(animalOrHuman2.address)
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// 어떤 타입인지 추론이 가능한 속성이면 괜찮으나, 두개의 타입 중 어느 하나라도 없는 값만 남게 되면 에러.
const personOrCat = {
    name: '리리리',
    age: 30,
    // breed: 'York',
    // country: 'british'
};
