import { removeElement, addElement, fetchData } from '../api/firebase';
import { IBook } from '../Manage/ManageComponent';
import { ActionType } from '../constants/actionTypes';

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

export function fetchBooks(space: string) {
    return (dispatch: any) => {
        dispatch({ 
                type: ActionType.fetchBooks, 
            })

        return fetchData(space)
            .then(response => dispatch(fetchBooksSuccess(response)))
            .catch(error => dispatch(fetchBooksFailure(error)));
    }
}

export const fetchBooksSuccess = (response: any) => ({
    type: ActionType.fetchBooksSuccess,
    response
}) 

export const fetchBooksFailure = (error: any) => ({
    type: ActionType.fetchBooksFailure,
    error
})

export function deleteBook(space: string, elementId: string) {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.deleteBook,
        })

        return removeElement(space, elementId)
            .then(() => dispatch(deleteBookSuccess()))
            .catch((error: any) => dispatch(deleteBookFailure(error)));
    }
}

export const deleteBookSuccess = () => ({
    type: ActionType.deleteBookSuccess,
})

export const deleteBookFailure = (error: any) => ({
    type: ActionType.deleteBookFailure,
    error
})

export function addBook(space: string, element: IBook) {
    return (dispatch: any) => {
        dispatch({
            type: ActionType.addBook,
        })
        return addElement(space, element)
        .then(() => dispatch(addBookSuccess()))
        .catch((error) => dispatch(addBookFailure(error)))
    }
}

export const addBookSuccess = () => ({
    type: ActionType.addBookSuccess,
})

export const addBookFailure = (error: any) => ({
    type: ActionType.addBookFailure,
    error
})
//tu dodawać kolejne interface dla akcji
export type AppActions = OpenModal | CloseModal | any;