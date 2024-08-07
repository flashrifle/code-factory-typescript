"use strict";
/*
    Overloading
 */
/*
    파라미터를
    1. 하나에 받거나
    2. 세개를 받는 함수
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
    만약에 하나의 파라미터만 입력받는다면
    아이돌 멤버들을 하나의 스트링으로 입력 받는다
 */
function stringOrString(memberOrMembers, member2, member3) {
    if (member2 && member3) {
        return `아이브 : ${memberOrMembers}, ${member2}, ${member3}`;
    }
    else {
        return `아이브 : ${memberOrMembers}`;
    }
}
console.log(stringOrString('안유진, 장원영, 레이'));
console.log(stringOrString('안유진, 장원영, 레이'));
// console.log(stringOrString('안유진', '장원영'))
