/*
    Nested Object
 */

type NestedPerson = {
    identity: {
        name: string,
        age: number
    },
    nationality: string
}

const codefactory: NestedPerson = {
    identity: {
        name: '코드팩토리',
        age: 32,
    },
    nationality: 'korean'
}

type TPerson = {
    identity: TPersonIdentity,
    nationality: string;
}

type TPersonIdentity = {
    name: string,
    age: number
}

const iu: TPerson = {
    identity: {
        name : '아이유',
        age: 32
    },
    nationality : 'korea'
}

interface IPerson {
    identity: IpersonIdentity,
    nationality: string
}

interface IpersonIdentity {
    name: string,
    age: number
}

const yujin: IPerson = {
    identity: {
        name: '안유진',
        age: 32,
    },
    nationality: 'korea'
}