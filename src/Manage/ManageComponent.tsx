import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItemComponent } from "./components/BookItemComponent";
import { DataTable } from "./components/DataTable";
import { fetchData } from "../dataFetcher";
import { BookItemModal } from "./components/BookItemModal";

export interface IBook {
  title: string;
  author: string | string[];
  cover: string;
  id: string;
  available: boolean;
}
interface IState {
  books: IBook[];
  modalOpen: boolean;
  modalItemId: number | null;
}

interface ManageComponentProps {
  openModal: (id: string) => void;
  closeModal: () => void;
  fetchBooks: () => void;
  isItemModalOpen: boolean;
  modalElementId: string;
}

export class ManageComponent extends React.Component<ManageComponentProps> {

  state: IState = {
    books: [],
    modalOpen: false,
    modalItemId: null,
  }
  componentDidMount() {
    const {fetchBooks} = this.props;
    const { books } = this.state;
    fetchBooks();
    if (!books.length) {
      fetchData()
        .then(data =>
          this.setState({
            books: data,
          })
        );
    }
  }

  handleOnClick = (id: string) => {
    const { openModal } = this.props;
    openModal(id);
  }

  render() {
    const { isItemModalOpen, modalElementId, closeModal } = this.props;
    const { books } = this.state;
    return (
      <Fragment>
        <SearchBar />
        <DataTable
          disabled={isItemModalOpen}
        >
          {books.length
            ? books.map((book, index) => (
              <BookItemComponent
                onClick={this.handleOnClick}
                key={book.id ? book.id : index}
                id={book.id ? book.id : ''}
                cover={book.cover}
                title={book.title}
                author={book.author}
                available={book.available}
                disabled={isItemModalOpen}
              />
            ))
            : "loading..."}
        </DataTable>
        {isItemModalOpen &&
          <BookItemModal
            elements={books}
            id={modalElementId}
            closeModal={closeModal}
          />
        }
      </Fragment>
    );
  }
}
