import React from "react";
import { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { BookItemComponent } from "./components/BookItemComponent";
import { DataTable } from "./components/DataTable";
import { BookItemModal } from "./components/BookItemModal";
import { NoData } from "./components/NoData";

export interface IBook {
  title: string;
  author: string | string[];
  cover: string;
  id: string;
  available: boolean;
}
interface ManageComponentProps {
  openModal: (id: string) => void;
  closeModal: () => void;
  fetchBooks: () => void;
  deleteBook: (elementId: string) => void;
  isItemModalOpen: boolean;
  modalElementId: string;
  shouldFetchData: boolean;
  books: Array<IBook>;
  dataIsFetching: boolean;
}

export class ManageComponent extends React.Component<ManageComponentProps> {

  componentDidMount() {
    const { fetchBooks, shouldFetchData, dataIsFetching } = this.props;
    if (shouldFetchData && !dataIsFetching) {
      fetchBooks();
    }
  }

  componentDidUpdate(prevProps: ManageComponentProps) {
    const { shouldFetchData, dataIsFetching } = this.props;
    if (!dataIsFetching && shouldFetchData && shouldFetchData !== prevProps.shouldFetchData) {
      this.props.fetchBooks();
    }
  }

  handleOnClick = (id: string) => {
    const { openModal } = this.props;
    openModal(id);
  }

  render() {
    const { isItemModalOpen, modalElementId, closeModal, deleteBook, books, dataIsFetching } = this.props;
    const emptyShelf = books.length === 0;
    return (
      <Fragment>
        <SearchBar />
        <DataTable
          disabled={isItemModalOpen}
        >
          {emptyShelf && <NoData/>}
          {dataIsFetching ?
            "loading..."
            :
            books.map((book, index) => (
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
            ))}
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
