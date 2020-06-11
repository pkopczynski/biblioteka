import { State } from '../types/interfaces';
import { ActionType } from '../constants/actionTypes';
import { AppActions } from '../actions';

const initialState = {
    isItemModalOpen: false,
    modalElementId: '',
    dataIsFetching: false,
    books: [],
    error: {},
    shouldFetchData: true,
    isAuthenticated: false,
    user: null,
}

export const globalReducer = (state: State = initialState, action: AppActions): State => {
    switch (action.type) {
        case ActionType.openModal:
            return {
                ...state,
                isItemModalOpen: true,
                modalElementId: action.id,
            };
        case ActionType.closeModal:
            return {
                ...state,
                isItemModalOpen: false,
                modalElementId: '',
            };
        case ActionType.fetchBooks:
            return {
                ...state,
                dataIsFetching: true,
            };
        case ActionType.fetchBooksSuccess:
            return {
                ...state,
                books: action.response,
                dataIsFetching: false,
                shouldFetchData: false,
            };
        case ActionType.fetchBooksFailure:
            return {
                ...state,
                error: action.error,
                dataIsFetching: false,
                shouldFetchData: true,
            };
        case ActionType.deleteBook:
            return {
                ...state,
                shouldFetchData: false,
            }
        case ActionType.deleteBookSuccess:
            return {
                ...state,
                shouldFetchData: true,
            }
        case ActionType.addBook:
            return {
                ...state,
                shouldFetchData: false,
            }
        case ActionType.addBookSuccess:
            return {
                ...state,
                shouldFetchData: true,
            }
        case ActionType.authUserSuccess:
            console.log('user: ', action.response)
            return {
                ...state,
                isAuthenticated: true,
                user: action.response
            }
        case ActionType.authUserFailure:
            console.log('error: ', action.error)
            return {
                ...state,
                isAuthenticated: false,
                error: action.error
            }
        default:
            return initialState;
    }
}