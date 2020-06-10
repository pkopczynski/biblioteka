import { PureComponent } from "react";
import React from "react";

interface IDeleteButtonProps {
    onDeleteClick: (elementId: string) => void;
    elementId: string;
    closeModal: () => void;
}

export class DeleteButton extends PureComponent<IDeleteButtonProps> {
    handleOnClick = () => {
        const {onDeleteClick, elementId, closeModal} = this.props;
        onDeleteClick(elementId);
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