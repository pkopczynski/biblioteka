import * as Actions from '../constants/actionTypes';

const initialState = {
    isItemModalOpen: false,
    modalElementId: '',
}

export const globalReducer = (state = initialState, action) => {
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
        default:
            return initialState;
    }
}