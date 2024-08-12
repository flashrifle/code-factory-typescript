/*
    Partial Type
 */

interface Idol {
    name: string;
    age: number;
    groupName: string;
}

const yujin: Idol = {
    name: '안유진',
    age: 22,
    groupName: '아이브'
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
    return {
        ...original,
        ...updates
    }
}

console.log(updateIdol(yujin, {
    age: 29,
    name: 'ddd'
}))