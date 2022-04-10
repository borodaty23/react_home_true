import { PAGE_NUMBER_MINUS, PAGE_NUMBER_PLUS, SET_PAGE_NUMBER } from "../action"

interface IPageNumberPlus {
    type: typeof PAGE_NUMBER_PLUS
    payload: {
    }
}

interface IPageNumberMinus {
    type: typeof PAGE_NUMBER_MINUS
    payload: {
        
    }
}

interface ISetPageNumber {
    type: typeof SET_PAGE_NUMBER,
    payload: {
        numb: number
    }
}

export type TPageActionsTypes = IPageNumberPlus | IPageNumberMinus | ISetPageNumber

export const pageNumberPlus = (): TPageActionsTypes =>{
    return{
        type: PAGE_NUMBER_PLUS,
        payload: {}
    }
}

export const pageNumberMinus = (): TPageActionsTypes =>{
    return{
        type: PAGE_NUMBER_MINUS,
        payload: {}
    }
}

export const setPageNumber = (numb: number): TPageActionsTypes =>{
    return{
        type: SET_PAGE_NUMBER,
        payload: {
            numb
        }
    }
}