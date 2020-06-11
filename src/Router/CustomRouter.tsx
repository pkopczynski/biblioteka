import { connect } from "react-redux";
import { authUser } from '../actions';
import { isAuthenticated } from "../selectors/globalSelectors";
import { Store } from "../types/interfaces";
import { AnyThunkDispatch } from "../actions/interface";
import { CustomRouterComponent } from "./CustomRouterComponent";

const mapStateToProps = (state: Store) => {
    return {
        isAuthenticated: isAuthenticated(state),
    }
};

const mapDispatchToProps = (dispatch: AnyThunkDispatch) => ({
    authUser: () => dispatch(authUser()),
})

export const CustomRouter = connect(mapStateToProps, mapDispatchToProps)(CustomRouterComponent)