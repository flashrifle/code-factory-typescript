/*
    Multi dimension array
 */

const numb2DArr: number[][] = [
    [1,2,3,4,5],[6,7,8]
]

const str2DARR = [
    ['1','2','3'],
    ['3','4','5'],
]

const strAndNumbArr: (number | string)[][] = [
    [1,'2',3],
    ['3']
]

let strArrOrNumbArr: string[][] | number[][] = [
    [1,2,3,4,5],
    [3,4,5],
]

strArrOrNumbArr = [
    ['1','2']
]

for (let arr of numb2DArr) {
    for(let item of arr) {

    }
}