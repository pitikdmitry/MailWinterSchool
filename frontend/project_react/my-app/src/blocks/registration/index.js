import React, { Component } from 'react';
import './index.css';

class Registration extends Component {
    render() {
        if (this.props.visibility) {
            return (
                <div id="registration">
                    <form id="registration-form" method="post">
                        <h2 className="heading">Registration</h2>
                        <div className="clear"><br></br></div>
                        <fieldset>
                            <legend>Your basic info</legend>
                            <label>Nickname:</label>
                            <input type="text" id="nickname" name="nickname"></input>

                            <label>First name:</label>
                            <input type="text" id="First-name" name="first_name"></input>

                            <label>Surname:</label>
                            <input type="text" id="Surname" name="surname"></input>

                            <label>Email:</label>
                            <input type="email" id="mail" name="email"></input>

                            <label>Password:</label>
                            <input type="password" id="password-reg" name="password"></input>
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
