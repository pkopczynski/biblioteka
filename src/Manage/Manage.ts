import { connect } from "react-redux";
import {openModal, closeModal, AppActions, fetchBooks, deleteBook} from '../actions';
import { ManageComponent } from "./ManageComponent";
import { getIsItemModalOpen, getModalElementId, dataIsReady, getBooks, dataIsFetching } from "../selectors/globalSelectors";
import { Store } from "../types/interfaces";
import { Dispatch } from "react";
import { Collection } from "../constants/dbSpaces";

const mapStateToProps = (state: Store) => {
    return {
        isItemModalOpen: getIsItemModalOpen(state),
        modalElementId: getModalElementId(state),
        dataIsReady: dataIsReady(state),
        books: getBooks(state),
        dataIsFetching: dataIsFetching(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
    fetchBooks: () => dispatch(fetchBooks()),
    deleteBook: (elementId: string) => dispatch(deleteBook(Collection.books, elementId)),
})

export const Manage = connect(mapStateToProps, mapDispatchToProps)(ManageComponent)