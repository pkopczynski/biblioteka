import { connect } from "react-redux";
import {openModal, closeModal, AppActions, fetchBooks} from '../actions';
import { ManageComponent } from "./ManageComponent";
import { getIsItemModalOpen, getModalElementId } from "../selectors/globalSelectors";
import { Store } from "../types/interfaces";
import { Dispatch } from "react";

const mapStateToProps = (state: Store) => {
    return {
        isItemModalOpen: getIsItemModalOpen(state),
        modalElementId: getModalElementId(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
    fetchBooks: () => dispatch(fetchBooks()),
})

export const Manage = connect(mapStateToProps, mapDispatchToProps)(ManageComponent)