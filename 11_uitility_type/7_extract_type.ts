/*
    Extract Type
    Exclude 와 반대 타입
 */

type stringOnly = Extract<string | boolean | number, string>;

type functionOnly = Extract<string | (() => void), Function>;