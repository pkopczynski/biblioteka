import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Manage } from "../Manage/Manage";
import { FirebaseReducer } from 'react-redux-firebase';
import Login from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";

interface CustomRouterComponentProps {
    firebaseAuth: FirebaseReducer.AuthState;
    authUser: () => void;
}

export class CustomRouterComponent extends PureComponent<CustomRouterComponentProps> {
    render() {
        const isUserAuthenticated = !!this.props.firebaseAuth.uid 
        return (
            <BrowserRouter>
                <CustomRoute
                    path='/'
                    navbar={<Navbar isUserAuthenticated={isUserAuthenticated}/>}
                    footer={<Footer />}
                    component={<Manage />}
                    protected={true}
                    isAvaiable={isUserAuthenticated}
                />
                <CustomRoute
                    path='/login'
                    navbar={<Navbar isUserAuthenticated={isUserAuthenticated}/>}
                    footer={<Footer />}
                    component={<Login />}
                    protected={false}
                    isAvaiable={isUserAuthenticated}
                />
                <CustomRoute
                    path='/signup'
                    navbar={<Navbar isUserAuthenticated={isUserAuthenticated}/>}
                    footer={<Footer />}
                    component={<SignUp />}
                    protected={false}
                    isAvaiable={isUserAuthenticated}
                />
            </BrowserRouter>
        );
    }
}
