/*
    Abstract class
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(1234)

class Product extends ModelWithId {
    // id: number;
    //
    // constructor(id: number) {
    //     super(id)
    //     this.id = id;
    // }
}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
     abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return '소리질렁.';
    }
}
