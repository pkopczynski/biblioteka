import { PureComponent } from "react";
import React from "react";
import { ModalContentWrapper } from "../styled/ModalContentWrapper";
import { ItemMinature } from "../styled/ItemMinature";

interface IModalContentProps {
    title: string;
    author: string | string[];
    cover: string;
    available: boolean;
}

export class ModalContent extends PureComponent<IModalContentProps> {
    render() {
        const { title, author, cover, available } = this.props;
        const firstAuthor = typeof(author) === 'string' ? author : author[0];
        return (
            <ModalContentWrapper>
                <h1>{title}</h1>
                <h2>{firstAuthor}</h2>
                <ItemMinature
                    src={cover}
                    alt={title}
                />
                {available ?
                    <span>pozycja <strong>{title}</strong> jest dostępna</span> :
                    <span>pozycja <strong>{title}</strong> nie jest dostępna</span>
                }
            </ModalContentWrapper>
        )
    }
}