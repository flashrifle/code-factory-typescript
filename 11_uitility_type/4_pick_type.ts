/*
    Pick Type
 */

interface Post {
    title: string;
    content: string;
    createAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    return {
        ...post,
        createAt: new Date(),
    }
}

createPost({
    title: 'a1112',
    content: 'sadfd?',
})
