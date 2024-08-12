/*
    Infer Keyword
    유추하다

    (Inferring Type in Conditional Type)

    Infer Keyword 는 Conditional Type 에만 사용 가능한 키워드
    extends 키워드를 사용했을 대 extend 한 대상에서 타입을 한번 더 추론하는 역할
 */

// 1. 가장 많이 사용하는 예제
// Flattening -> Array 를 벗겨낼 때
// string[] -> string ...
// string[][] -> string[]

type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType: Type;
type Flatten2<Type> = Type extends (infer ElementType)[]  ? ElementType : Type;

type stringArray = Flatten2<string[]>;
type NumberArray = Flatten2<number[]>;
type TwoDArray = Flatten2<boolean[][]>

// return 타입 추론
type InferReturnType<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;

type NumberArray2 = InferReturnType<number[]>;

type StringFunc = InferReturnType<() => string>
type NumberFunc = InferReturnType<() => number>