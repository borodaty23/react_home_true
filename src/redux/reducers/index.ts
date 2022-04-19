import { combineReducers } from 'redux';
import { countReducer } from "./countReducer/countReducer"
import { pagesReducer } from "./pageReducer/pageReducer"
import { hitsPerPageReduce } from './hitsPerPageReducer/hitsPerPageReducer';

const rootReducer = combineReducers({
    count: countReducer,
    page: pagesReducer,
    hitsPerPage: hitsPerPageReduce,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
