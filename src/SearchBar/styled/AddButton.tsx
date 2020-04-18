import { PureComponent } from "react";
import React from "react";
import { IBook } from "../../Manage/Manage";
import { Collection } from "../../constants/dbSpaces";

interface IAddButtonProps {
    onAdd: (space: string, element: IBook) => void;
    element: IBook;
}

export class AddButton extends PureComponent<IAddButtonProps> {
    handleOnClick = () => {
        const { onAdd, element } = this.props;
        onAdd(Collection.books, element);
    }
    render() {
        const {element} = this.props;
        return (
            <button
                onClick={this.handleOnClick} >
                add {element.title}
            </button>
        )
    }
}