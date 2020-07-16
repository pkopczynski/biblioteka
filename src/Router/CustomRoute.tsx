import { PureComponent, ReactNode } from "react";
import React from "react";
import { Route } from "react-router-dom";

interface CustomRouteProps {
    path: string;
    component: ReactNode;
    navbar: ReactNode;
    footer: ReactNode;
    isAvaiable?: boolean;
    protected: boolean;
}

export class CustomRoute extends PureComponent<CustomRouteProps> {
    render() {
        const {component, navbar, footer, path} = this.props;
        return (
            <Route exact path={path} render={() =>
                <React.Fragment>
                    {navbar}
                    {component}
                    {footer}
                </React.Fragment> 
            }/>
        );
    }
}