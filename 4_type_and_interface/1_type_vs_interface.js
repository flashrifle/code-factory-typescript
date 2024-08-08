"use strict";
/*
    Type vs Interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
let rectangle = {
    height: 200,
    width: 100,
};
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
    constructor() {
        // 프로퍼티
        this.getY = (x) => { return x; };
    }
    // 매서드
    getX(x) {
        return x;
    }
}
// const testMethod: GetXnY2 = {
//     getX(x) {
//         return x;
//     },
//     getY(y) {
//         return y;
//     }
// }
