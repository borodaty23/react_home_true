import { TPageActionsTypes } from "../../actions/pagesActionCreator/actionCreator"
import { PAGE_NUMBER_PLUS, PAGE_NUMBER_MINUS, SET_PAGE_NUMBER } from "../../actions/action";

const initialState = 0;

export const pagesReducer = (state = initialState, { type, payload }: TPageActionsTypes) => {
    switch (type){
        case PAGE_NUMBER_PLUS:
            return state + 1;
        case PAGE_NUMBER_MINUS:
            return state - 1;
        case SET_PAGE_NUMBER:
            return payload.numb
        default: 
            return state
    }
}