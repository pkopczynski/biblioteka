import { PureComponent } from "react";
import React from "react";
import { DeleteButton } from "./DeleteButton";

interface IModalButtonsProps {
    id: string;
    closeModal: () => void;
    onDeleteClick: (elementId: string) => void;
}

export class ModalButtons extends PureComponent<IModalButtonsProps> {
    render() {
        const { id, closeModal, onDeleteClick } = this.props;
        return (
            <div>
                <DeleteButton
                    onDeleteClick={onDeleteClick}
                    elementId={id}
                    closeModal={closeModal}
                />
                <button onClick={closeModal}>cancel</button>
            </div>
        )
    }
}