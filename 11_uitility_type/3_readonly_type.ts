/*
    Readonly Type
 */

interface Cat {
    name: string;
    age: number;
}

const cat: Cat = {
    name: '야용',
    age: 1
}

cat.name = '묭';

const bori: Readonly<Cat> = {
    name: '오리',
    age: 7
}

// bori.age = 1

Object.freeze(bori);