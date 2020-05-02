import { PureComponent } from "react";
import React from "react";
import { removeElement } from "../../utils/firebase";
import { DeleteButton } from "./DeleteButton";

interface IModalButtonsProps {
    id: string;
    closeModal: () => void;
}

export class ModalButtons extends PureComponent<IModalButtonsProps> {
    render() {
        const { id, closeModal } = this.props;
        return (
            <div>
                <DeleteButton
                    onRemove={removeElement}
                    elementId={id}
                    closeModal={closeModal}
                />
                <button onClick={closeModal}>cancel</button>
            </div>
        )
    }
}