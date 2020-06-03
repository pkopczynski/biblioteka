import * as Actions from '../constants/actionTypes';
import { fetchData } from '../dataFetcher';
import { removeElement } from '../utils/firebase';

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

export function deleteBook(space: string, elementId: string) {
    return (dispatch: any) => {
        dispatch({
            type: Actions.DELETE_BOOK,
        })

        return removeElement(space, elementId)
            .then(() => dispatch(deleteBookSuccess()))
            .catch((error: any) => dispatch(deleteBookFailure(error)));
    }
}

export const deleteBookSuccess = () => ({
    type: Actions.DELETE_BOOK_SUCCESS,
})

export const deleteBookFailure = (error: any) => ({
    type: Actions.DELETE_BOOK_FAILURE,
    error
})

//tu dodawać kolejne interface dla akcji
export type AppActions = Action | ModalAction | any;