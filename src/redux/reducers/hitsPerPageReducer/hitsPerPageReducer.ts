import { CHANGE_HITS_PER_PAGE } from "../../actions/action"
import { TChangeHitsPerPage } from "../../actions/hitsPerPageCreator/action"

const initialState = 20

export const hitsPerPageReduce = (state = initialState, { type, payload }: TChangeHitsPerPage) => {
    switch (type){
        case CHANGE_HITS_PER_PAGE:
            return payload.value;
        default:
            return state;
    }
}