import { State } from '../types/interfaces';
import { ActionType } from '../constants/actionTypes';

const initialState = {
    isItemModalOpen: false,
    modalElementId: '',
    dataIsFetching: false,
    books: [],
    error: {},
    shouldFetchData: true,
}

export const globalReducer = (state: State = initialState, action: any): State => {
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
        default:
            return initialState;
    }
}