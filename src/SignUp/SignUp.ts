import { connect } from "react-redux";
import { SignUpComponent } from "./SignUpComponent";
import { createUser } from "../actions";
import { getError } from "../selectors/globalSelectors";

const mapDispatchToProps = (dispatch: any) => ({
    createUser: (email: string, password: string) => dispatch(createUser(email, password)),
})

const mapStateToProps = (state: any) => ({
    error: getError(state),
})

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
