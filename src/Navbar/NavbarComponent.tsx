import { PureComponent } from "react";
import React from "react";
import { AddButton } from "../SearchBar/styled/AddButton";
import { book1, book2 } from "../mocks/elementMocks";
import { IBook } from "../Manage/ManageComponent";

interface NavbarComponentProps {
    addBook: (element: IBook) => void;
}

export class NavbarComponent extends PureComponent<NavbarComponentProps> {
    render() {
        const {addBook} = this.props;
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
            </div>
        );
    }
}