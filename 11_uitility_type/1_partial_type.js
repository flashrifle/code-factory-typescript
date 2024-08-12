"use strict";
/*
    Partial Type
 */
Object.defineProperty(exports, "__esModule", { value: true });
const yujin = {
    name: '안유진',
    age: 22,
    groupName: '아이브'
};
function updateIdol(original, updates) {
    return {
        ...original,
        ...updates
    };
}
console.log(updateIdol(yujin, {
    age: 29,
    name: 'ddd'
}));
