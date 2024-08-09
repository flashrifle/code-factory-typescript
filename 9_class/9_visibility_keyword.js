"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PropertyTestParent_jsPrivateProperty;
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Visibility Keyword

    public (기본값) - 어디서든 접근가능
    protected - 현재 클래스 및 하위 클래스에서 접근 가능
    private - 현재 클래스 내부에서만 접근 가능
 */
class PropertyTestParent {
    constructor() {
        this.publicProperty = 'public Property';
        this.protectedProperty = 'protected Property';
        this.privateProperty = 'private Property';
        _PropertyTestParent_jsPrivateProperty.set(this, 'js private Property');
    }
    test() {
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        __classPrivateFieldGet(this, _PropertyTestParent_jsPrivateProperty, "f");
    }
}
_PropertyTestParent_jsPrivateProperty = new WeakMap();
class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty
        // this.#jsPrivateProperty
    }
}
const instance = new PropertyTestChild();
instance.publicProperty;
