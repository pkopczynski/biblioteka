import * as Actions from '../constants/actionTypes';
import { fetchData } from '../dataFetcher';

export interface Action {
    type: string;
}

export interface ModalAction extends Action {
    id: string;
}

export const openModal = (id: string): ModalAction => ({
    type: Actions.OPEN_MODAL,
    id
})

export const closeModal = (): Action => ({
    type: Actions.CLOSE_MODAL,
})

export function fetchBooks() {
    return (dispatch: any) => {
        dispatch
            ({ type: Actions.FETCH_BOOKS, })

        return fetchData()
            .then(response => dispatch(fetchBooksSuccess(response)))
            .catch(error => dispatch(fetchBooksFailure(error)));
    }
}

export const fetchBooksSuccess = (response: any) => ({
    type: Actions.FETCH_BOOKS_SUCCESS,
    response
}) 

export const fetchBooksFailure = (error: any) => ({
    type: Actions.FETCH_BOOKS_FAILURE,
    error
})

//tu dodawać kolejne interface dla akcji
export type AppActions = Action | ModalAction | any;