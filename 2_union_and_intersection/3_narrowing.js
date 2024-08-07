"use strict";
/*
    Narrowing

    내로잉은 유니온 타입에서 더욱 구체적인 타입으로
    논리적으로 유추 할 수 있게 되는 것을 의미
 */
Object.defineProperty(exports, "__esModule", { value: true });
// let numberOrString: number | string = 'TTTaAAABb';
// numberOrString;
//
// const decimal = 12.3221;
// console.log(decimal.toFixed(2))
/*
    Narrowing 종류
    1. Assignment Narrowing
    2. typeof Narrowing
    3. Truthiness Narrowing
    4. Equality Narrowing
    5. in operator Narrowing
    6. instanceof Narrowing
    7. discriminated union Narrowing ( 차별된 유니언 내로잉 )
    8. exhaustiveness checking
 */
// 1. Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString = '가나다';
numberOrString.toString();
// 2. typeof Narrowing
numberOrString = Math.random() > 0.5 ? 1123 : '라마바';
if (typeof numberOrString === 'string') {
    numberOrString;
}
else {
    numberOrString;
}
// 3. Truthiness Narrowing
let nullOrString = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];
if (nullOrString) {
    nullOrString;
}
else {
    nullOrString;
}
// 4. Equality Narrowing
let numOrString2 = Math.random() > 0.5 ?
    1123 : '아이유';
let stringOrBool2 = Math.random() > 0.5 ?
    '가나다' : true;
if (numOrString2 === stringOrBool2) {
    numOrString2;
    stringOrBool2;
}
else {
    numOrString2;
    stringOrBool2;
}
let numberOrStringOrNull = Math.random() > 0.5 ?
    1123 : Math.random() > 0.5 ?
    '안유진' : null;
if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
}
else {
    numberOrStringOrNull;
}
let human = {
    name: '안유진',
    age: 23
};
let dog = {
    name: '오리',
    type: 'pug'
};
let humanOrDog = Math.random() > 0.5 ?
    human : dog;
if ('type' in humanOrDog) {
    humanOrDog;
}
else {
    humanOrDog;
}
// 6. instanceof narrowing
let dateOrString = Math.random() > 0.5 ?
    new Date() : '가가가가가';
if (dateOrString instanceof Date) {
    dateOrString;
}
else {
    dateOrString;
}
let animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 188,
    } : {
    type: 'dog',
    breed: 'pug'
};
if (animal.type === 'human') {
    animal.height;
}
else {
    animal.breed;
    animal.height;
}
let humanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 188
    } : Math.random() > 0.5 ?
    {
        type: 'dog',
        breed: 'pug'
    } : {
    type: 'fish',
    length: 200
};
if (humanOrDog2.type === 'human') {
    humanOrDog2;
}
else {
    humanOrDog2;
}
// 8. Exhaustiveness Checking
// 예를들어 humanOrDog2 타입에 해당되는 모든 조건이 case에 선언되면
// default 는 never 가 된다.
// humanOrDog2에 타입을 모두 넣지 않고 default 를 사용 하면
// 선언 되지 않은 타입이 default에 올 수 있기 때문에 에러가 나게된다.
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default:
        humanOrDog2;
        // const _check: never = humanOrDog2;
        break;
}
