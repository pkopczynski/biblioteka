import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItemComponent } from "./components/BookItemComponent";
import { DataTable } from "./components/DataTable";
import { fetchData } from "../dataFetcher";
import { BookItemModal } from "./components/BookItemModal";

export interface IBook {
  title: string;
  author: string[];
  cover: string;
  id: number;
  available: boolean;
}
interface IState {
  books: IBook[];
  modalOpen: boolean;
  modalItemId: number | null;
}

export class Manage extends React.Component {
  state: IState = {
    books: [],
    modalOpen: false,
    modalItemId: null,
  }
  componentDidMount() {
    const { books } = this.state;
    if (!books.length) {
      fetchData()
        .then(data =>
          this.setState({
            books: data,
          })
        );
    }
  }

  handleOnClick = (id: number) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalItemId: id,
    })
  }

  render() {
    const { books, modalOpen, modalItemId } = this.state;
    return (
      <Fragment>
        <SearchBar />
        <DataTable>
          {books.length
            ? books.map((book) => (
              <BookItemComponent
                onClick={this.handleOnClick}  
                key={book.id}
                id={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                available={book.available}
              />
            ))
            : "loading..."}
        </DataTable>
        {modalOpen && 
        <BookItemModal
          elements={books}
          id={modalItemId}  
        />
        }
      </Fragment>
    );
  }
}
