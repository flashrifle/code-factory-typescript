"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Namespace
 */
var Home;
(function (Home) {
    class Idol {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    Home.yujin = new Idol('안유진', 23);
})(Home || (Home = {}));
var Post;
(function (Post) {
    class User {
        constructor(email, name) {
            this.email = email;
            this.name = name;
        }
    }
    const admin = new User('admin@aasd.com', Home.yujin.name);
    console.log(admin);
})(Post || (Post = {}));
var Comment;
(function (Comment) {
    const name = 'comment';
    let Detail;
    (function (Detail) {
        const page = 'detail';
        console.log(name);
        console.log(page);
    })(Detail || (Detail = {}));
    console.log('--------');
    console.log(name);
    // console.log(page)
})(Comment || (Comment = {}));
