import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Manage } from "../Manage/Manage";
import { Login } from "../Login/LoginComponent";
import { authDirectly } from "../api/firebase";

interface CustomRouterComponentProps {
    authUser: () => void;
}

export class CustomRouterComponent extends PureComponent<CustomRouterComponentProps> {
    componentDidMount() {
        authDirectly()
    }
    render() {
        return (
            <BrowserRouter>
                <CustomRoute
                    path='/'
                    navbar={<Navbar />}
                    footer={<Footer />}
                    component={<Manage />}
                />
                <CustomRoute
                    path='/login'
                    navbar={<Navbar />}
                    footer={<Footer />}
                    component={<Login />}
                />
            </BrowserRouter>
        );
    }
}
