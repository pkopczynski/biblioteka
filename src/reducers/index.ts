import {combineReducers} from 'redux';
import {globalReducer} from './globalReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    globalReducer,
    firebase: firebaseReducer,
})