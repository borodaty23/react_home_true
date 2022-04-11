import { CHANGE_COUNT_PLUS } from "../action";
import { CHANGE_COUNT_MINUS } from "../action";

interface IChangeCountPlusAction {
    type: typeof CHANGE_COUNT_PLUS
}

interface IChangeCountMinusAction {
    type: typeof CHANGE_COUNT_MINUS
}

export type TTaskActionTypes = IChangeCountPlusAction | IChangeCountMinusAction

export const changeCountPlus = (): TTaskActionTypes =>{
    return{
        type: CHANGE_COUNT_PLUS,
    }
}

export const changeCountMinus = (): TTaskActionTypes =>{
    return{
        type: CHANGE_COUNT_MINUS,
    }
}