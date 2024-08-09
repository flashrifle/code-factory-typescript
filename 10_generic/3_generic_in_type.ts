/*
    Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '1234';
// const genericString2: GenericSimpleType = '1234';

interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123','456'],
}

state = {
    requestAt: new Date()
}

state = {
    error: 'error'
}

