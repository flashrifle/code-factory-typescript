/*
    Type Inference

    타입 추론
 */

let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'string';

// 타입 선언시 const 를 이용하면 좀 더 구체화 된 타입을 선언할 수 있다. ( 중요 )
const constStringType: 'const string' = 'const string';
const constBooleanType = true;

let yujin = {
    name: '안유진',
    age: 2003
}

//
const yujin2 = {
    name: '안유진',
    age: 2003
}

// 객체체 안에서 구체화된 값을 넣으려면 as const 를 사용
const yujin3 = {
    name: '안유진' as const,
    age: 2003
}

// yujin3.name = '1234'

console.log(yujin3.name)
console.log(yujin2.name)

/*
    Array
 */

let numbers = [1,2,3,4,5];
let numbersAndString = [1,2,3,'4','5'] // Union

// numbers.push('6')
const number = numbers[0];
const nos = numbersAndString[0]

// 그냥 Array 일 경우엔 배열의 길이를 넘는 일이 생겨도 컴파일러가 에러를 잡지 못함
// -> undefined 를 반환
const nos2 = numbersAndString[6]

// tuple
const twoNumbers = [1,3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0]

// tuple 로 배열을 선언하면 배열을 넘는 값을 가져올 때 에러를 일으킴
// const first2 = twoNumbers[3];