import React, { PureComponent } from "react";
import { IBook } from "../Manage";
import { ModalWrapper } from "../styled/ModalWrapper";
import { ModalButtons } from "./ModalButtons";
import { ModalContent } from "./ModalContent";

interface IBookItemModal {
    elements: IBook[];
    id: number | null | undefined;
}

export class BookItemModal extends PureComponent<IBookItemModal>{

    state: IBook = {
        author: 'no author',
        title: 'no title',
        cover: 'no cover',
        id: null,
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
                />
            </ModalWrapper>
        )
    }
}