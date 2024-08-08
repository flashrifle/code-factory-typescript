/*
    Tuple
 */

let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

// array 의 형태를 강제할 수 있다
let numberAndStringTuple: [number, string] = [
    23, 'string'
]

numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple); // 값이 삽입되는 문제

// readonly 이용해 push를 막음
let unmodifiedTuple: readonly [number, string] = [
    23, 'string'
]

// unmodifiedTuple.push('')

/*
    Tuple 유추하기
 */
let actresses = ['김고은', '박소담','전여빈']

let actressesTuple = ['김고은', '박소담','전여빈'] as const;
const actressesTupleConst = ['김고은', '박소담','전여빈'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
]

/*
    Named Tuple
 */
const namedTuple: [name: string, age: number] = [
    'string', 23
]

/*
    Assigning Tuple to Tuple
    튜플은 같은 타입끼리만 할당이 가능하다
 */
const tuple1: [string, string] = ['아이유', '유에나'];
const tuple2: [number, number] = [1,2];

// let tuple3: [boolean, boolean] = tulpe1;
// let tuple4: [number, number, number] = tulpe2;

let tuple5: [number, number] = tuple2;

/*
    Tuple 과 Arr 의 관계
 */

let ive: [string, string] = [
    '장원영',
    '안유진'
]

let stringArr: string[] = ive;
// let ive2: [string, string] = stringArr;

/*
    Multi Dimensional Tuple
 */

const tuple2D: [string, number][] = [
    ['asdf', 20],['2222', 30],['xxcx', 40]
]