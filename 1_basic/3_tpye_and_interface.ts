/*
    Type and Interface
 */

/*
    Type

    타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;
type NewNumberType = number;

type NewNullType = null;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = '1111'; // moduleDetection 에서 force 설정, 중복된 변수이름 ...

type IdolType = {
    name: string;
    year: number;
}

const yujin: IdolType = {
    name: '안유진',
    year: 123
}

/*
    Interface
    - 타입과 비슷한 기능이지만 인터페이스만 할 수 있는 기능이 있다.
    - 기본적으로 객체로 선언이 가능, primitive 선언은 불가
 */

interface IdolInterface {
    name: string;
    year: number;
}

const yujin2: IdolInterface = {
    name: '안유진',
    year: 2002
}

interface IdolIT {
    name: NewStringType;
    year: NewNumberType
}

const yujin3: IdolIT = {
    name: '안유진',
    year: 2002
}

interface IdolOptional {
    name: string;
    year?: number; // 입력을 해도되고 안해도되는 옵션
}

const yujin4: IdolOptional = {
    name: '안유진'
}