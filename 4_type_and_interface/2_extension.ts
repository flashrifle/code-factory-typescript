/*
    Extension
 */

interface IName {
    name: string;
}

interface IIdol extends IName {
    age: number;
}

const idol: IIdol = {
    name: 'ddd',
    age:23
}

type TName = {
    name: string;
}

type TIdol = TName & {
    age: number;
}

const idol2: TIdol = {
    name: 'ddd',
    age: 30
}

interface IIdol2 extends TName {
    age: number;
}

const idol3: IIdol2 = {
    name: 'ddd',
    age: 30
}

type TIdol2 = IName &  {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 30
}

/*
    extending multiple
 */

type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string,
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: 'hoon',
    age: 2,
    breed: 'pug'
}

interface CatName {
    name: string;
}

interface CatAge {
    age: number;
}

interface Cat extends CatName, CatAge {
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 4,
    breed: '코리안'
}

/*
    Overriding
 */

type THegiht = {
    height: number;
}

type TRectangle = THegiht & {
    height: string;
    width: number;
}

// const rectangle: TRectangle = {
//     height: 2,
//     width: 2,
// }

type TWidth = {
    width: number | string;
}

type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 1,
}

interface IHeight {
    height: number;
}

// interface IRectangle extends IHeight {
//     height: string;
//     width: number;
// }

interface IWidth {
    width: number | string;
}

interface IRectangle extends IWidth {
    width: number,
    height: number,
}