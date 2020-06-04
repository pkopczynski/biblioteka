import { IBook } from "../Manage/ManageComponent";

export interface State {
    isItemModalOpen: boolean;
    modalElementId: string;
    dataIsFetching: boolean;
    books: Array<IBook>;
    error: any;
    shouldFetchData: boolean;
}

export interface Store {
    globalReducer: State;
}