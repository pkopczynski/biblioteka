import React, { PureComponent } from "react";
import { IBook } from "../Manage";

interface IBookItemModal {
    elements: IBook[];
    id: number | null;
}

export class BookItemModal extends PureComponent<IBookItemModal>{

    componentDidMount() {
        const { id, elements } = this.props;
        const modalElement = elements.find(element => element.id === id);
    }

    render() {
        const { id } = this.props;
        return (
            <div>
                {id}
            </div>
        )
    }
}