import { GET_POSTS_Failed, GET_POSTS_Started, GET_POSTS_Success } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";

export interface IPosts {
    userId: number
    id: number
    title: string
    body: string
}

export type TPostsActions = IGetPostsSuccess | IGetPostsFailed | IGetPostsStarted

export interface IGetPostsSuccess {
    type: typeof GET_POSTS_Success
    payload: IPosts[]
}

export interface IGetPostsFailed {
    type: typeof GET_POSTS_Failed
    payload: {
        error: string
    }
}

export interface IGetPostsStarted {
    type: typeof GET_POSTS_Started
    payload: {}
}

export const getPostsStarted = (): IGetPostsStarted => ({
    type: GET_POSTS_Started,
    payload: {}
});

export const getPostsSuccess = (posts: IPosts[]): IGetPostsSuccess  => {
    return {
        type: GET_POSTS_Success,
        payload: [
            ...posts
        ]
    }
}

export const getPostsFailed = (): IGetPostsFailed => {
    return {
        type: GET_POSTS_Failed,
        payload: {
            error: "GG WP"
        }
    }
}

export const getPosts = () => {
    return (dispatch: Dispatch<TPostsActions>) => {
        dispatch(getPostsStarted()); 

        axios
            .get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const mappedResponse = res.data.map(item => item);
                setTimeout(() => {
                    dispatch(getPostsSuccess(mappedResponse));
                }, 3000);
            })
            .catch(err => {
                dispatch(getPostsFailed());
            });
    };
}




