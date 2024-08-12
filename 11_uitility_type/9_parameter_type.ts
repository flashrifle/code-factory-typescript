/*
    Parameter Type
 */

function sampleFunction(x: string, y: string, z: boolean) {
    
}

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one: number) => void>