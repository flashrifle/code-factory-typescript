/*
    Object
 */

const codefactory = {
    name: "Defining Object",
    age: 32
}

interface IPerson {
    name: string,
    age: number
}

type TPerson = {
    name: string,
    age: number
}

const iPerson: IPerson = {
    name: "Defining Object",
    age: 32
}

const tPerson: TPerson = {
    name: "Defining Object",
    age: 32
}