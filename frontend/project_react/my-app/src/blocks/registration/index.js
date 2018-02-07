import React, { Component } from 'react';
import './index.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    nickname: '',
                    first_name: '',
                    surname: '',
                    email: '',
                    password: ''
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch(event.target.name) {
            case 'nickname':
                this.setState({nickname: event.target.value});
                break;
            case 'first_name':
                this.setState({first_name: event.target.value});
                break;
            case 'surname':
                this.setState({surname: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'password':
                this.setState({password: event.target.value});
                break;
            default:

                break;
        }

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nickname);
        event.preventDefault();
        this.props.callBack(this.state);
    }

    render() {
        if (this.props.visibility) {
            return (
                <div id="registration">
                    <form className="reg-form" id="registration-form" method="post">
                        <h2 className="heading" >Registration</h2>
                        <div className="clear"><br></br></div>
                        <fieldset>
                            <label>Nickname:</label>
                            <input type="text" id="nickname" onChange={this.handleChange} name="nickname"></input>

                            <label>First name:</label>
                            <input type="text" id="First-name" onChange={this.handleChange} name="first_name"></input>

                            <label>Surname:</label>
                            <input type="text" id="Surname" onChange={this.handleChange} name="surname"></input>

                            <label>Email:</label>
                            <input type="email" id="mail" onChange={this.handleChange} name="email"></input>

                            <label>Password:</label>
                            <input type="password" id="password-reg" onChange={this.handleChange} name="password"></input>
                        </fieldset>

                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {Registration};
