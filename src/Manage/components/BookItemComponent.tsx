import { PureComponent } from "react";
import { BookItem } from "../styled/BookItem";
import React from "react";
import { IBook } from "../ManageComponent";

interface IBookItemProps extends IBook {
  onClick: (id: string) => void;
  disabled: boolean;
}

export class BookItemComponent extends PureComponent<IBookItemProps>{

  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  }
  render() {
    const { cover, disabled } = this.props;
    return (
      <BookItem
        onClick={this.onClick}
        cover={cover}
        disabled={disabled}
      />
    )
  }
}
