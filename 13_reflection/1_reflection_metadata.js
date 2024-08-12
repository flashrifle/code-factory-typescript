"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Reflection Metadata
 */
require("reflect-metadata");
const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean'
};
console.log(iu);
/*
    파라미터의 정리
    1. 메타데이터의 키
    2. 메타데이터 키에 저장할 값
    3. 메타데이터를 저장할 객체
    4. 메타데이터를 저장할 객체의 프로퍼티

    4번은 필수가 아님.

    메타데이터란? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 1234, iu);
console.log(iu);
console.log(Reflect.getMetadata('test-meta', iu));
Reflect.defineMetadata('test-meta', 5678, iu);
console.log(Reflect.getMetadata('test-meta', iu));
Reflect.defineMetadata('meta2', { name: '이름' }, iu);
console.log(Reflect.getMetadata('meta2', iu));
// 프로퍼티에 저장
Reflect.defineMetadata('object-meta', 1234, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));
Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));
console.log(Reflect.hasMetadata('object-meta', iu, 'name'));
console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));
Reflect.defineMetadata('prototype-data', '프로토타입 메타입니다.', Object.getPrototypeOf(iu));
console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getOwnMetadataKeys(iu));
