import React, { Component } from 'react';
import '../registration/index.css';

class SignIn extends Component {
    render() {
        if (this.props.visibility) {
            return (
                <div id="signIn">
                    <form id="signIn-form" action="index.html" method="post">

                        <h2 className="heading">Log In</h2>
                        <div class="clear"><br></br></div>
                        <fieldset>
                            <label >Nickname or email:</label>
                            <input type="text" id="nickname_or_email" name="nickname_or_email"></input>

                            <label>Password:</label>
                            <input type="password" id="password-signIn" name="user_password"></input>
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
