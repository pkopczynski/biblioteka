import * as React from "react";
import { Link } from "react-router-dom";

interface LoginProps {
    logInUser(login: string, password: string): void;
    firebaseAuth: any;
}

export class LoginComponent extends React.PureComponent<LoginProps> {
    state = {
        login: '',
        password: '',
    }

    onLoginChange = (event: any) => {
        this.setState({
            login: event.target.value,
        })
    }

    onPasswordChange = (event: any) => {
        this.setState({
            password: event.target.value,
        })
    }

    handleOnClick = () => {
        this.props.logInUser(this.state.login, this.state.password);
    }

    render() {
        return (
            <>
                <input type='text' placeholder='login' onChange={this.onLoginChange} />
                <input type='password' placeholder='hasło' onChange={this.onPasswordChange} />
                <button onClick={this.handleOnClick}>
                    zaloguj
                    </button>
                <div>
                    Jeżeli nie masz konta <Link to='/signup'>zarejestruj się</Link>
                </div>
            </>
        );
    }
}