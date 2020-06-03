export interface State {
    isItemModalOpen: boolean;
    modalElementId: string;
    dataIsFetching: boolean;
    books: any;
    error: any;
    dataIsReady: boolean;
}

export interface Store {
    globalReducer: State;
}