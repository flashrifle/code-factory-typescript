/*
    Visibility Keyword

    public (기본값) - 어디서든 접근가능
    protected - 현재 클래스 및 하위 클래스에서 접근 가능
    private - 현재 클래스 내부에서만 접근 가능
 */
class PropertyTestParent {
    public publicProperty = 'public Property'
    protected protectedProperty = 'protected Property'
    private privateProperty = 'private Property'
    #jsPrivateProperty = 'js private Property'

    test() {
        this.publicProperty
        this.protectedProperty
        this.privateProperty
        this.#jsPrivateProperty
    }
}

class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty
        this.protectedProperty
        // this.privateProperty
        // this.#jsPrivateProperty
    }
}

const instance = new PropertyTestChild();
instance.publicProperty;
