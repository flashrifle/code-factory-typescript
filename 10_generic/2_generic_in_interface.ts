/*
    Generic in interface
 */

interface CaChe<T> {
    data: T[];
    lastUpdate : Date;
}

const cache1: CaChe<string> = {
    data : ['data1', 'data2'],
    lastUpdate: new Date(),
}

// const cache2: CaChe<number> = {
//     data: [123,456],
//     lastUpdate: new Date(),
// }


interface DefaultGeneric<T = string> {
    data: T[];
}

const cache3: DefaultGeneric = {
    data : ['1234','4567']
}
