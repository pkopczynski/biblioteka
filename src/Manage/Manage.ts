import { connect } from "react-redux";
import {openModal, closeModal} from '../actions';
import { ManageComponent } from "./ManageComponent";
import { getIsItemModalOpen, getModalElementId } from "../selectors/globalSelectors";

const mapStateToProps = (state: any) => {
    return {
        isItemModalOpen: getIsItemModalOpen(state),
        modalElementId: getModalElementId(state),
    }
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => ({
    openModal: (id: string) => dispatch(openModal(id)),
    closeModal: (id: string) => dispatch(closeModal(id))
})

export const Manage = connect(mapStateToProps, mapDispatchToProps)(ManageComponent)