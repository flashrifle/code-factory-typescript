"use strict";
/*
    Generic in class
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Pagination {
    constructor() {
        this.data = [];
    }
}
const pgData = new Pagination();
pgData.data;
pgData.message;
pgData.lastFetchedAt;
class Pagination2 {
    constructor(data, message, lastFetchedAt) {
        this.data = [];
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}
const pagination2 = new Pagination2([123, 456]);
pagination2.data;
pagination2.message;
pagination2.lastFetchedAt;
class DefaultGeneric {
    constructor() {
        this.data = [];
    }
}
const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;
