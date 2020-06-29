import { IBook } from "../Manage/ManageComponent";
import { FirebaseReducer } from 'react-redux-firebase'

export interface State {
    isItemModalOpen: boolean;
    modalElementId: string;
    dataIsFetching: boolean;
    books: Array<IBook>;
    error: any;
    shouldFetchData: boolean;
    isAuthenticated: boolean;
    user: {} | null;
}

export interface Store {
    globalReducer: State;
    firebase: FirebaseReducer.Reducer;
}