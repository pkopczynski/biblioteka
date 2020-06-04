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

export function shouldFetchData(state: Store) {
    return getGlobalState(state).shouldFetchData;
}

export function getBooks(state: Store) {
    return getGlobalState(state).books;
}

export function dataIsFetching(state: Store) {
    return getGlobalState(state).dataIsFetching;
}