/*
    Enum
 */

/*
    API 요청을한다.
    상태는 4가지 상태
    DONE - 요청완료 상태
    ERROR - 에러 상태
    LOADING - 로딩 상태
    INITIAL - 초기 상태
 */

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업을 한다

        state = 'DONE';
    } catch (e) {
        state = 'ERROR';
    } finally {
        return state;
    }
}

console.log(runWork() === 'DONE')

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialedState = 'INITIAL';

function runWork2() {
    let state = initialedState;

    try {
        state = loadingState;
        // 작업을 한다

        state = doneState;
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork2() === doneState);

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // 작업을 한다

        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());