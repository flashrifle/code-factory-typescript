/*
    Statement and Expression / 문장과 표현식
 */

// statement (문장)
function addTowNumbers(x: number, y: number): number {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

// statement
function add(x: number, y: number): number {
    return x + y
}

function subtract(x: number, y: number): number {
    return x - y
}

function multiply(x: number, y: number): number {
    return x * y
}

function divide(x: number, y: number): number {
    return x / y
}

// expression
// 표현식을 이용하면 함수마다 매개변수에 타입을 넣지 않고, 반복적으로 return 값을 바꿔 작성할 수 있다.
// 때문에 표현식을 선호하는게 좋다
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = (x, y) => {
    return x + y;
}

const subtract2: CalculationType = function(x, y) {
    return x - y;
}

const multiply2: CalculationType = function(x, y) {
    return x * y;
}

const divide2: CalculationType = function(x, y) {
    return x / y;
}
