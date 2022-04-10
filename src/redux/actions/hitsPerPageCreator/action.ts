import { CHANGE_HITS_PER_PAGE } from "../action"

interface IChangeHitsPerPage {
    type: typeof CHANGE_HITS_PER_PAGE,
    payload: {
        value:number
    }
}

export type TChangeHitsPerPage = IChangeHitsPerPage

export const changeHitsPerPage = (value: number):TChangeHitsPerPage => {
    return {
        type: CHANGE_HITS_PER_PAGE,
        payload:{
            value
        }
    }
}