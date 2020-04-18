import { PureComponent } from "react";
import React from "react";
import { Collection } from "../../constants/dbSpaces";

interface IDeleteButtonProps {
    onRemove: (space: string, elementId: number | null | undefined) => void;
    elementId: number | null | undefined;
}

export class DeleteButton extends PureComponent<IDeleteButtonProps> {
    handleOnClick = () => {
        const {onRemove, elementId} = this.props;
        onRemove(Collection.books, elementId);
    } 
    render() {
        return(
            <button onClick={this.handleOnClick}>
                delete
            </button>
        )
    }
}