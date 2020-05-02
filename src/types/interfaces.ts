export interface State {
    isItemModalOpen: boolean;
    modalElementId: string;
    dataIsFetching: boolean;
    books: any;
    error: any;
}

export interface Store {
    globalReducer: State;
}