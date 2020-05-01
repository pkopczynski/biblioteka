function getGlobalState(state: any) {
    return state.globalReducer;
}

export function getIsItemModalOpen(state: any) {
    return getGlobalState(state).isItemModalOpen;
}

export function getModalElementId(state: any) {
    return getGlobalState(state).modalElementId;
}