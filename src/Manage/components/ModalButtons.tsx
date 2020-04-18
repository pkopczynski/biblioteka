import { PureComponent } from "react";
import React from "react";
import { removeElement } from "../../utils/firebase";
import { DeleteButton } from "./DeleteButton";

interface IModalButtonsProps {
    id: number | null | undefined;
}

export class ModalButtons extends PureComponent<IModalButtonsProps> {
    render() {
        const { id } = this.props;
        return (
            <div>
                <DeleteButton
                    onRemove={removeElement}
                    elementId={id}
                />
                <button>cancel</button>
            </div>
        )
    }
}