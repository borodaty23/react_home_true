import { GET_POSTS_FAILED, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "../../actions/actions";
import { TPostsActions, IPosts } from "../../actions/addPostsActionCreator/addPostsActionCreator";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
}

export interface IInitialState {
    posts: IPosts[];
    isLoading: boolean;
    error: string | null;
}

export const postsReducer = (state = initialState, {type, payload}: TPostsActions): IInitialState => {
    switch (type) {
        case GET_POSTS_STARTED:
            return {
                ...state, isLoading: true,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state, isLoading: false, posts: [...payload]
            };
        case GET_POSTS_FAILED:
            return {
                ...state, error: payload.error, isLoading: false,
            }
        default:
            return {
                ...state
            }    
    }
}