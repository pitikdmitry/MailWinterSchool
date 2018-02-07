import React, { Component } from 'react';
import './index.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname_or_email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.name) {
            case 'nickname_or_email':
                this.setState({nickname_or_email: event.target.value});
                break;
            case 'user_password':
                this.setState({password: event.target.value});
                break;
            default:

                break;
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.callBack(this.state);
    }

    render() {
        if (this.props.visibility) {
            return (
                <div id="signIn">
                    <form className="signIn-form" id="signIn-form" method="post">
                        <h2 className="heading">Log In</h2>
                        <div className="clear"><br></br></div>
                        <fieldset>
                            <label >Nickname or email:</label>
                            <input type="text" id="nickname_or_email" onChange={this.handleChange} name="nickname_or_email"></input>

                            <label>Password:</label>
                            <input type="password" id="password-signIn" onChange={this.handleChange} name="user_password"></input>
                        </fieldset>

                        <button onSubmit={this.handleSubmit} type="submit">Log In</button>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {SignIn};
