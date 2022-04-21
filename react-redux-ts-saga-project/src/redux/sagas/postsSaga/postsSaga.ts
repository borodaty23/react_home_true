import { GET_ASYNC_POSTS } from "../../actions/actions";
import { all, put, takeLatest, call, select } from "redux-saga/effects";
import { getPostsFailed, getPostsStarted, getPostsSuccess, IError, IPosts } from "../../actions/addPostsActionCreator/addPostsActionCreator";
import { getPosts } from "../../../api/fetchTasks/getPosts";

function* fetchPostsSaga() {
    try{
        yield put(
            getPostsStarted()
        )
        const response: { data: IPosts[], error: IError } = yield call(getPosts)
        if (response.data) {
            yield put(
                getPostsSuccess(response.data)
            );
        } else if (response.error) {
            yield put(
                getPostsFailed(response.error)
            );
        }
    } catch (e) {
        yield put(
            getPostsFailed(e as IError)
        );
    }
}

function* postsSaga() {
    yield all([takeLatest(GET_ASYNC_POSTS, fetchPostsSaga)]);
}

export default postsSaga;



