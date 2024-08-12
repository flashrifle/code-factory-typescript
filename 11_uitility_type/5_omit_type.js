"use strict";
/*
    Omit Type
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createPost(post) {
    return {
        ...post,
        createAt: new Date(),
    };
}
createPost({
    title: 'a1112',
    content: 'sadfd?',
});
