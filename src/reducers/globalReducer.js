export const globalReducer (state = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isItemModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isItemModalOpen: false,
            };
        default:
            return state;
    }
}