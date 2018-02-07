import React, { Component } from 'react';
import './index.css';

class SignIn extends Component {
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

                        <button type="submit">Log In</button>
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {SignIn};
