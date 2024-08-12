/*
    Omit Type
 */

interface Post {
    title: string;
    content: string;
    createAt: Date;
}

function createPost(post: Omit<Post, 'createAt'>): Post {
    return {
        ...post,
        createAt: new Date(),
    }
}

createPost({
    title: 'a1112',
    content: 'sadfd?',
})
