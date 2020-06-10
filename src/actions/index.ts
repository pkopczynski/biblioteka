import { removeElement, addElement, fetchData, registerUser, loginUser, signOutUser } from '../api/firebase';
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

export function deleteBook(space: string, elementId: string): MyThunkAction<DeleteBookSuccess | DeleteBookFailure, DeleteBookAction | DeleteBookSuccess | DeleteBookFailure> {
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

export type CreateUserAction = Action<ActionType.createUser>
export type CreateUserSuccess = Action<ActionType.createUserSuccess>
export interface CreateUserFailure extends Action<ActionType.createUserFailure> {
    error: any;
}

export function createUser(email: string, password: string): MyThunkAction<CreateUserSuccess | CreateUserFailure, CreateUserAction | CreateUserSuccess | CreateUserFailure> {
    return (dispatch) => {
        dispatch({
            type: ActionType.createUser
        })
        return registerUser(email, password)
            .then(() => dispatch(createUserSuccess()))
            .catch((error) => dispatch(createUserFailure(error)))
    }
}

export const createUserSuccess = (): CreateUserSuccess => ({
    type: ActionType.createUserSuccess
})

export const createUserFailure = (error: any): CreateUserFailure => ({
    type: ActionType.createUserFailure,
    error
})

export type LogInUserAction = Action<ActionType.logInUser>
export type LogInUserSuccess = Action<ActionType.logInUserSuccess>
export interface LogInUserFailure extends Action<ActionType.logInUserFailure> {
    error: any;
}

export function logInUser(email: string, password: string): MyThunkAction<LogInUserSuccess | LogInUserFailure, LogInUserAction | LogInUserSuccess | LogInUserFailure> {
    return (dispatch) => {
        dispatch({
            type: ActionType.logInUser
        })
        return loginUser(email, password)
            .then(() => dispatch(logInUserSuccess()))
            .catch((error) => dispatch(logInUserFailure(error)))
    }
}

export const logInUserSuccess = (): LogInUserSuccess => ({
    type: ActionType.logInUserSuccess
})

export const logInUserFailure = (error: any): LogInUserFailure => ({
    type: ActionType.logInUserFailure,
    error
})

export type LogOutUserAction = Action<ActionType.logOutUser>
export type LogOutUserSuccess = Action<ActionType.logOutUserSuccess>
export interface LogOutUserFailure extends Action<ActionType.logOutUserFailure> {
    error: any;
}

export function logOutUser(): MyThunkAction<LogOutUserSuccess | LogOutUserFailure, LogOutUserAction | LogOutUserSuccess | LogOutUserFailure> {
    return (dispatch) => {
        dispatch({
            type: ActionType.logOutUser
        })
        return signOutUser()
            .then(() => dispatch(logOutUserSuccess()))
            .catch((error) => dispatch(logOutUserFailure(error)))
    }
}

export const logOutUserSuccess = (): LogOutUserSuccess => ({
    type: ActionType.logOutUserSuccess
})

export const logOutUserFailure = (error: any): LogOutUserFailure => ({
    type: ActionType.logOutUserFailure,
    error
})

//tu dodawać kolejne interface dla akcji
export type AppActions = OpenModal | CloseModal | FetchBooksAction | FetchBooksSuccess | FetchBooksFailure | DeleteBookAction | DeleteBookSuccess | DeleteBookFailure | AddBookAction | AddBookSuccess | AddBookFailure | CreateUserAction | CreateUserSuccess | CreateUserFailure | LogInUserAction | LogInUserSuccess | LogInUserFailure | LogOutUserAction | LogOutUserSuccess | LogOutUserFailure;