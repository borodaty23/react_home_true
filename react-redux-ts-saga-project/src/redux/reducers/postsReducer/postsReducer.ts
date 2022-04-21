import { GET_ASYNC_POSTS, GET_POSTS_FAILED, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "../../actions/actions";
import { IError, IPosts, TPostsActions } from "../../actions/addPostsActionCreator/addPostsActionCreator";

export interface IInitialState {
    posts: IPosts[];
    isLoading: boolean;
    error: IError | null;
}

const initialState = {
    posts: [] as IPosts[],
    isLoading: false,
    error: null
};

const postsReducer = (state = initialState, { payload, type }: TPostsActions): IInitialState => {
    switch (type) {
        case GET_POSTS_STARTED:
            return {
                ...state, isLoading: true,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state, posts: payload as IPosts[], isLoading: false, error: null
            };
        case GET_POSTS_FAILED:
            return {
                ...state, isLoading: false, error: (payload as {error: IError}).error
            };
        default:
            return state;
    }
}

export default postsReducer;