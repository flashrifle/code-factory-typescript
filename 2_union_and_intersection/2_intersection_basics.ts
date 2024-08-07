/*
    Intersection
    And 의 개념
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string,
    address: string,
}

type HumanAndContacts = Human & Contacts;

// intersection은 두개의 속성이 모두 있어야함 &&
let humanAndContacts: HumanAndContacts = {
    name: 'ffff',
    age: 30,
    phone: '123-456-888',
    address: 'seoul'
}

// primitive 타입을 intersection 해버리면 존재할 수 없는 상황이기 때문에 never 타입이 된다.
type NumberAndString = number & string;

// let numberAndString: NumberAndString = '1' 어떤 값을 넣어도 에러.
