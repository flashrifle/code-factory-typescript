"use strict";
/*
    Object Union
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dogOrCat = Math.random() > 0.5 ?
    {
        name: '별이',
        age: 20
    } : {
    name: '오리',
    breed: '길냥이'
};
dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;
const dogOrCat2 = Math.random() > 0.5 ?
    {
        name: '별이',
        age: 20
    } : {
    name: '오리',
    breed: '길냥이'
};
dogOrCat2.name;
// dogOrCat2.age;
// dogOrCat2.breed;
if ('age' in dogOrCat2) {
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name;
}
else {
    dogOrCat2;
}
