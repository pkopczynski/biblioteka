import { Store } from "../types/interfaces";

function getGlobalState(state: Store) {
    return state.globalReducer;
}

export function getIsItemModalOpen(state: Store) {
    return getGlobalState(state).isItemModalOpen;
}

export function getModalElementId(state: Store) {
    return getGlobalState(state).modalElementId;
}