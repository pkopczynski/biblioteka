import React, { PureComponent } from "react";
import { IBook } from "../ManageComponent";
import { ModalWrapper } from "../styled/ModalWrapper";
import { ModalButtons } from "./ModalButtons";
import { ModalContent } from "./ModalContent";

interface IBookItemModal {
    elements: IBook[];
    id: string;
    closeModal: () => void;
    onDeleteClick: (elementId: string) => void;
}

export class BookItemModal extends PureComponent<IBookItemModal>{

    state: IBook = {
        author: 'no author',
        title: 'no title',
        cover: 'no cover',
        id: '',
        available: true,
    }

    componentDidMount() {
        const { id, elements } = this.props;
        const modalElement = elements.find(element => element.id === id);
        this.setState({
            author: modalElement?.author,
            title: modalElement?.title,
            cover: modalElement?.cover,
            id: modalElement?.id,
            available: modalElement?.available,
        })
    }

    render() {
        const {closeModal, onDeleteClick} = this.props;
        const { title, author, cover, available, id } = this.state;
        return (
            <ModalWrapper>
                <ModalContent
                    title={title}
                    author={author}
                    cover={cover}
                    available={available}
                />
                <ModalButtons
                    id={id}
                    closeModal={closeModal}
                    onDeleteClick={onDeleteClick}
                />
            </ModalWrapper>
        )
    }
}