import { connect } from "react-redux";
import {openModal, closeModal, fetchBooks, deleteBook} from '../actions';
import { ManageComponent } from "./ManageComponent";
import { getIsItemModalOpen, getModalElementId, getBooks, dataIsFetching, shouldFetchData } from "../selectors/globalSelectors";
import { Store } from "../types/interfaces";
import { Collection } from "../constants/dbSpaces";
import { AnyThunkDispatch } from "../actions/interface";

const mapStateToProps = (state: Store) => {
    return {
        isItemModalOpen: getIsItemModalOpen(state),
        modalElementId: getModalElementId(state),
        shouldFetchData: shouldFetchData(state),
        books: getBooks(state),
        dataIsFetching: dataIsFetching(state),
    }
};

const mapDispatchToProps = (dispatch: AnyThunkDispatch) => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
    fetchBooks: () => dispatch(fetchBooks(Collection.books)),
    deleteBook: (elementId: string) => dispatch(deleteBook(Collection.books, elementId)),
})

export const Manage = connect(mapStateToProps, mapDispatchToProps)(ManageComponent)