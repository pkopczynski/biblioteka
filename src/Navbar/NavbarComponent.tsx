import { PureComponent } from "react";
import React from "react";
import { AddButton } from "../SearchBar/styled/AddButton";
import { book1, book2 } from "../mocks/elementMocks";
import { IBook } from "../Manage/ManageComponent";

interface NavbarComponentProps {
    addBook: (element: IBook) => void;
    createUser: (email: string, password: string) => void;
    logInUser: (email: string, password: string) => void;
    logOutUser: () => void;
}

export class NavbarComponent extends PureComponent<NavbarComponentProps> {
    private createUser = () => {
        const emailMock = 'test@user.pl';
        const passwordMock = 'zaq123ZAQ!@#';
        this.props.createUser(emailMock, passwordMock);
    }

    private logInUser = () => {
        const emailMock = 'test@user.pl';
        const passwordMock = 'zaq123ZAQ!@#';
        this.props.logInUser(emailMock, passwordMock);
    }

    render() {
        const { addBook } = this.props;
        return (
            <div>
                <AddButton
                    onAdd={addBook}
                    element={book1}
                />
                <AddButton
                    onAdd={addBook}
                    element={book2}
                />
                <button
                    onClick={this.createUser}
                >
                    sign Up
                </button>
                <button
                    onClick={this.logInUser}
                >
                    sign In
                </button>
                <button
                    onClick={this.props.logOutUser}
                >
                    log out
                </button>
            </div>
        );
    }
}