import { PureComponent } from "react";
import React from "react";
import { Collection } from "../../constants/dbSpaces";

interface IDeleteButtonProps {
    onRemove: (space: string, elementId: number | null | undefined) => void;
    elementId: number | null | undefined;
    closeModal: any;
}

export class DeleteButton extends PureComponent<IDeleteButtonProps> {
    handleOnClick = () => {
        const {onRemove, elementId, closeModal} = this.props;
        onRemove(Collection.books, elementId);
        closeModal();
    } 
    render() {
        return(
            <button onClick={this.handleOnClick}>
                delete
            </button>
        )
    }
}