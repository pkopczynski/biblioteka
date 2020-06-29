import { Store } from "../types/interfaces";
import { FirebaseReducer } from 'react-redux-firebase';

function getFirebaseState(state: Store): FirebaseReducer.Reducer {
    return state.firebase;
}

export function getAuthData(state: Store): FirebaseReducer.AuthState {
    return getFirebaseState(state).auth;
}