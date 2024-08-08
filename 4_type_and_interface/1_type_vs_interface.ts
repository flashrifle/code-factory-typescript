/*
    Type vs Interface
 */

interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function 을 선언할 때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x:number, y:number) => number;

/*
    Type 에서는 할 수 있지만
    interface 에서는 할 수 없는 것들
 */
// 1. primitive 타입 선언하기
type Name = string;

// 2. union 타입 선언하기
type UnionType = string | number;

// 3. primitive list 또는 tuple 타입 선언
type TupleType = [number, string];

/*
    인터페이스는 할 수 있고
    타입은 못하는 것
 */
// interface merging >> 인터페이스는 중복 선언되면 속성이 합쳐짐
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }
//
// type TRectangle = {
//     width: number;
// }

/*
    Interface Merging
 */

class Review {
    // 프로퍼티
    getY = (x: number) => {return x};
    // 매서드
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

// const testMethod: GetXnY2 = {
//     getX(x) {
//         return x;
//     },
//     getY(y) {
//         return y;
//     }
// }