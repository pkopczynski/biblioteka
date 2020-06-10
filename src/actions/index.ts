import { removeElement, addElement, fetchData } from '../api/firebase';
import { IBook } from '../Manage/ManageComponent';
import { ActionType } from '../constants/actionTypes';
import { MyThunkAction } from './interface';

export interface Action<ActionType> {
    type: ActionType;
}

export interface OpenModal extends Action<ActionType.openModal> {
    id: string;
}

type CloseModal = Action<ActionType.closeModal>

export const openModal = (id: string): OpenModal => ({
    type: ActionType.openModal,
    id
})

export const closeModal = (): CloseModal => ({
    type: ActionType.closeModal,
})

export type FetchBooksAction = Action<ActionType.fetchBooks>

export interface FetchBooksSuccess extends Action<ActionType.fetchBooksSuccess> {
    response: any;
}

export interface FetchBooksFailure extends Action<ActionType.fetchBooksFailure> {
    error: any;
}

export function fetchBooks(space: string): MyThunkAction<FetchBooksSuccess | FetchBooksFailure, FetchBooksAction | FetchBooksSuccess | FetchBooksFailure> {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.fetchBooks,
        })

        return fetchData(space)
            .then(response => dispatch(fetchBooksSuccess(response)))
            .catch(error => dispatch(fetchBooksFailure(error)));
    }
}

export const fetchBooksSuccess = (response: any): FetchBooksSuccess => ({
    type: ActionType.fetchBooksSuccess,
    response
})

export const fetchBooksFailure = (error: any): FetchBooksFailure => ({
    type: ActionType.fetchBooksFailure,
    error
})

export type DeleteBookAction = Action<ActionType.deleteBook>

export type DeleteBookSuccess = Action<ActionType.deleteBookSuccess>

export interface DeleteBookFailure extends Action<ActionType.deleteBookFailure> {
    error: any;
}

export function deleteBook(space: string, elementId: string): MyThunkAction<DeleteBookSuccess | DeleteBookFailure, DeleteBookAction | DeleteBookSuccess | DeleteBookFailure > {
    return (dispatch) => {
        dispatch({
            type: ActionType.deleteBook,
        })

        return removeElement(space, elementId)
            .then(() => dispatch(deleteBookSuccess()))
            .catch((error: any) => dispatch(deleteBookFailure(error)));
    }
}

export const deleteBookSuccess = (): DeleteBookSuccess => ({
    type: ActionType.deleteBookSuccess,
})

export const deleteBookFailure = (error: any): DeleteBookFailure => ({
    type: ActionType.deleteBookFailure,
    error
})

export type AddBookAction = Action<ActionType.addBook>

export type AddBookSuccess = Action<ActionType.addBookSuccess>

export interface AddBookFailure extends Action<ActionType.addBookFailure> {
    error: any;
}

export function addBook(space: string, element: IBook): MyThunkAction<AddBookSuccess | AddBookFailure, AddBookSuccess | AddBookFailure | AddBookAction> {
    return (dispatch) => {
        dispatch({
            type: ActionType.addBook,
        })
        return addElement(space, element)
            .then(() => dispatch(addBookSuccess()))
            .catch((error) => dispatch(addBookFailure(error)))
    }
}

export const addBookSuccess = (): AddBookSuccess => ({
    type: ActionType.addBookSuccess,
})

export const addBookFailure = (error: any): AddBookFailure => ({
    type: ActionType.addBookFailure,
    error
})
//tu dodawać kolejne interface dla akcji
export type AppActions = OpenModal | CloseModal | FetchBooksAction | FetchBooksSuccess | FetchBooksFailure | DeleteBookAction | DeleteBookSuccess | DeleteBookFailure | AddBookAction | AddBookSuccess | AddBookFailure;