import { PureComponent } from "react";
import { BookItem } from "../styled/BookItem";
import React from "react";

interface IBookItemProps {
  cover: string;
  title: string;
  author: string[];
  available: boolean;
  onClick: any;
  id: number;
}

export class BookItemComponent extends PureComponent<IBookItemProps>{
  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  }
  render() {
    const { cover } = this.props;
    return (
      <BookItem
        onClick={this.onClick}
        cover={cover}
      />
    )
  }
}
