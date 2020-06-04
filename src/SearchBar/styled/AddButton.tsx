import { PureComponent } from "react";
import React from "react";
import { IBook } from "../../Manage/ManageComponent";

interface IAddButtonProps {
    onAdd: (element: IBook) => void;
    element: IBook;
}

export class AddButton extends PureComponent<IAddButtonProps> {
    handleOnClick = () => {
        const { onAdd, element } = this.props;
        onAdd(element);
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