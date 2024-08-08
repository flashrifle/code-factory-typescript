/*
    Loopholes of any
 */

let number: number;
number = 10;

// (number as any).toUpperCase();

const multiplyTow = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTow(args1, args2)
// multiplyTow('a', args2)

let iu: any = {name: '아이유', age: 30};
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x,y);
}

const callback = (x:number, y:number) => {
    return x * y;
}
console.log(callbackRunner(5,3, callback))
