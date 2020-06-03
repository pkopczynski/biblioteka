import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItemComponent } from "./components/BookItemComponent";
import { DataTable } from "./components/DataTable";
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
  deleteBook: (elementId: string) => void;
  isItemModalOpen: boolean;
  modalElementId: string;
  dataIsReady: boolean;
  books: IBook[];
  dataIsFetching: boolean;
}

export class ManageComponent extends React.Component<ManageComponentProps> {

  state: IState = {
    books: [],
    modalOpen: false,
    modalItemId: null,
  }
  componentDidMount() {
    const {fetchBooks, dataIsReady, dataIsFetching} = this.props;
    if (!dataIsReady && !dataIsFetching) {
      fetchBooks();
    }
  }

  componentDidUpdate(prevProps: ManageComponentProps) {
    if (!this.props.dataIsFetching && !this.props.dataIsReady && this.props.dataIsReady !== prevProps.dataIsReady) {
      this.props.fetchBooks();
    }
  }

  handleOnClick = (id: string) => {
    const { openModal } = this.props;
    openModal(id);
  }

  render() {
    const { isItemModalOpen, modalElementId, closeModal, deleteBook, books } = this.props;
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
            onDeleteClick={deleteBook}
          />
        }
      </Fragment>
    );
  }
}
