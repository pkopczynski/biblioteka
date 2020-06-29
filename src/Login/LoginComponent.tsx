import * as React from "react";

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
        console.log(this.props.firebaseAuth)
        return (
            <>
                <form>
                    <input type='text' placeholder='login' onChange={this.onLoginChange}/>
                    <input type='password' placeholder='hasło' onChange={this.onPasswordChange}/>
                    <button type='submit' onClick={this.handleOnClick}>
                        zaloguj
                    </button>
                </form>
            </>
        );
    }
}