import * as Actions from '../constants/actionTypes';
import { State } from '../types/interfaces';

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
        case Actions.OPEN_MODAL:
            return {
                ...state,
                isItemModalOpen: true,
                modalElementId: action.id,
            };
        case Actions.CLOSE_MODAL:
            return {
                ...state,
                isItemModalOpen: false,
                modalElementId: '',
            };
        case Actions.FETCH_BOOKS:
            return {
                ...state,
                dataIsFetching: true,
            };
        case Actions.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.response,
                dataIsFetching: false,
                shouldFetchData: false,
            };
        case Actions.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                error: action.error,
                dataIsFetching: false,
                shouldFetchData: true,
            };
        case Actions.DELETE_BOOK:
            return {
                ...state,
                shouldFetchData: false,
            }
        case Actions.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                shouldFetchData: true,
            }
        case Actions.ADD_BOOK:
            return {
                ...state,
                shouldFetchData: false,
            }
        case Actions.ADD_BOOK_SUCCESS:
            return {
                ...state,
                shouldFetchData: true,
            }
        default:
            return initialState;
    }
}