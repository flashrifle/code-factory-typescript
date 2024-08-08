/*
    Object Union
 */

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

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
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

if('age' in dogOrCat2) {
    dogOrCat2;
    dogOrCat2.age;
    dogOrCat2.name
} else {
    dogOrCat2;
}