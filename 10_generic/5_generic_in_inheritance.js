"use strict";
/*
    Generic in inheritance
 */
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCache {
    constructor() {
        this.data = [];
    }
}
class StringCache extends BaseCache {
}
const stringCache = new StringCache();
stringCache.data;
class GenericChild extends BaseCache {
    constructor(message) {
        super();
        this.message = message;
    }
}
const genericChild = new GenericChild('error');
genericChild.data;
genericChild.message;
class Idol {
    constructor(information) {
        this.information = information;
    }
}
const yujin = new Idol({
    name: '안유진',
    age: 23,
});
/*
    keyof 함께 사용하기
 */
const testObject = {
    a: 1,
    b: 2,
    c: 3,
};
function objectParser(obj, key) {
    return obj[key];
}
const val = objectParser(testObject, 'a');
/*
    Ternary
 */
class Idol2 {
}
class FemaleIdol extends Idol2 {
    constructor() {
        super(...arguments);
        this.type = 'Female Idol';
    }
}
class MaleIdol extends Idol2 {
    constructor() {
        super(...arguments);
        this.type = 'Male Idol';
    }
}
const idol2 = new FemaleIdol();
const idol3 = new MaleIdol();
