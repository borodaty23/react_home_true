import { GET_ASYNC_POSTS, GET_POSTS_FAILED, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "../actions";

export interface IPosts {
    userId: number
    id: number
    title: string
    body: string
}

export interface IError {
    code: number;
    message: string;
}

export type TPostsActions = IGetPostsSuccess | IGetPostsFailed | IGetPostsStarted | IAddAsyncPosts

export interface IGetPostsSuccess {
    type: typeof GET_POSTS_SUCCESS,
    payload: IPosts[]
}

export interface IGetPostsFailed {
    type: typeof GET_POSTS_FAILED,
    payload: {
        error: IError
    }
}

export interface IGetPostsStarted {
    type: typeof GET_POSTS_STARTED,
    payload: {}
}

export interface IAddAsyncPosts {
    type: typeof GET_ASYNC_POSTS,
    payload: {}
}

export const getPostsStarted = (): TPostsActions => ({
    type: GET_POSTS_STARTED,
    payload: {}
});

export const getPostsSuccess = (posts: IPosts[]): TPostsActions  => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: [
            ...posts
        ]
    }
}

export const getPostsFailed = (error: IError): TPostsActions => {
    return {
        type: GET_POSTS_FAILED,
        payload: {
            error
        }
    }
}

export const addAsyncPosts = (): TPostsActions => {
    return {
        type: GET_ASYNC_POSTS,
        payload: {}
    }
}