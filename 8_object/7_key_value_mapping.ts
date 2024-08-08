/*
    Key Value Mapping
 */

enum State {
    loading,
    done,
    error
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser']
    paginateUsers: GlobalApiStatus['getUser']
    banUser: GlobalApiStatus['getUser']
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser:
    // paginateUsers:
    // banUser:
}

type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>

/*
    keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser'

type KeyofUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

type KeyofUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

type KeyofUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading',
    data: string[]
}

interface ErrorStatus {
    type: 'error',
    message: string[]
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']