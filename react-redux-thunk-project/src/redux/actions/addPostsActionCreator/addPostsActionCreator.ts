import {GET_POSTS_FAILED, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "../actions";
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
    type: typeof GET_POSTS_SUCCESS
    payload: IPosts[]
}

export interface IGetPostsFailed {
    type: typeof GET_POSTS_FAILED
    payload: {
        error: string
    }
}

export interface IGetPostsStarted {
    type: typeof GET_POSTS_STARTED
    payload: {}
}

export const getPostsStarted = (): IGetPostsStarted => ({
    type: GET_POSTS_STARTED,
    payload: {}
});

export const getPostsSuccess = (posts: IPosts[]): IGetPostsSuccess  => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: [
            ...posts
        ]
    }
}

export const getPostsFailed = (): IGetPostsFailed => {
    return {
        type: GET_POSTS_FAILED,
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




