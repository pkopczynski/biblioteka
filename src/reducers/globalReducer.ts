import * as Actions from '../constants/actionTypes';
import { State } from '../types/interfaces';
import { AppActions, Action, ModalAction } from '../actions';

const initialState = {
    isItemModalOpen: false,
    modalElementId: '',
    dataIsFetching: false,
    books: {},
    error: {},
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
            console.log('poszedł fetch');
            return {
                ...state,
                dataIsFetching: true,
            };
        case Actions.FETCH_BOOKS_SUCCESS:
            console.log('success: ', action.response);
            return {
                ...state,
                books: action.response,
                dataIsFetching: false,
            };
        case Actions.FETCH_BOOKS_FAILURE:
            console.log('error: ', action.error);
            return {
                ...state,
                error: action.error,
                dataIsFetching: false,
            };
        default:
            return initialState;
    }
}