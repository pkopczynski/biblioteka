import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app'

const rrfConfig = {
    userProfile: 'users'
  }

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
  }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
