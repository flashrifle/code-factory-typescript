/*
    Casting
    TS에서 Casting을 하면 JS에서 적용이 안된다.
 */

const codefactory = 'codefactory';
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

// 아래는 string 이 출력될 것 같지만 number 가 출력된다
// Casting 은 JS 에서 적용되지 않기 때문에 주의가 필요함
console.log(typeof (sampleNumber as string))

let number = 5;
console.log((number as any).toUpperCase())