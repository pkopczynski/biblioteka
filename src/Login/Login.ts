import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";
import { logInUser } from "../actions";
import { Store } from "../types/interfaces";
import { getAuthData } from "../selectors/firebaseSelectors";

const mapStateToProps = (state: Store) => ({
    firebaseAuth: getAuthData(state),
})

const mapDispatchToProps = (dispatch: any) => ({
    logInUser: (email: string, password: string) => dispatch(logInUser(email, password)),
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default Login;