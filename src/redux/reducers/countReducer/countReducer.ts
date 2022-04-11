import { CHANGE_COUNT_PLUS } from "../../actions/action";
import { CHANGE_COUNT_MINUS } from "../../actions/action";
import { TTaskActionTypes } from "../../actions/countActionCreater/actionCreater"

const initialState = 0;

export const countReducer = (state = initialState, { type }: TTaskActionTypes) => {
    switch (type){
        case CHANGE_COUNT_PLUS:
            return state + 1;
        case  CHANGE_COUNT_MINUS:
            return state - 1;   
        default: 
            return state
    }
}
