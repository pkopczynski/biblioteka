import * as React from "react";

interface SignUpError {
    code: string;
    message: string;
} 

interface SignUpComponentProps {
    createUser: (email: string, password: string) => void;
    error: SignUpError;
}

export class SignUpComponent extends React.PureComponent<SignUpComponentProps> {
    state = {
        login: '',
        password: '',
        confirmPassword: '',
        error: null,
    }

    public componentDidUpdate() {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: 'hasła nie są takie same',
            })
        }
    }

    onLoginChange = (event: any) => {
        this.setState({
            login: event.target.value,
        })
    }

    onPasswordChange = (event: any) => {
        this.setState({
            password: event.target.value,
            error: null,
        })
    }

    onConfirmPasswordChange = (event: any) => {
        this.setState({
            confirmPassword: event.target.value,
            error: null,
        })
    }

    private handleOnClick = () => {
        if (this.state.error) {
            console.log('niet')
        } else {
            this.props.createUser(this.state.login, this.state.password);
        }
    }
    render() {
        return (
            <>
                <label htmlFor='login'>email</label>
                <input
                    type='email'
                    placeholder='login'
                    name='login'
                    onChange={this.onLoginChange}
                />
                <label htmlFor='password'>hasło</label>
                <input
                    type='password'
                    placeholder='hasło'
                    name='password'
                    onChange={this.onPasswordChange}
                />
                <label htmlFor='confirmPassword'>potwierdź hasło</label>
                <input
                    type='password'
                    placeholder='potwierdź hasło'
                    name='confirmPassword'
                    onChange={this.onConfirmPasswordChange}
                />
                <div>
                    {this.state.error || this.props.error.message}
                </div>
                <button onClick={this.handleOnClick}>
                    sign up
                </button>
            </>
        )
    }
}