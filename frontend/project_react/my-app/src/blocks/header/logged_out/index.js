import React, { Component } from 'react';
import '../index.css';

class HeaderLoggedOut extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (clickData) => {
        this.props.callBack(clickData.target.id);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <div id="reg-auth">
                    <a href="#" title="Sign-In">
                        <div id="signIn-btn" onClick={this.handleClick} className="auth-btn">
                            Sign In
                        </div>
                    </a>
                    <a href="#" title="Registration">
                        <div id="registration-btn" onClick={this.handleClick} className="auth-btn">
                            Registration
                        </div>
                    </a>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {HeaderLoggedOut};
