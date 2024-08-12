"use strict";
/*
    Readonly Type
 */
Object.defineProperty(exports, "__esModule", { value: true });
const cat = {
    name: '야용',
    age: 1
};
cat.name = '묭';
const bori = {
    name: '오리',
    age: 7
};
// bori.age = 1
Object.freeze(bori);
