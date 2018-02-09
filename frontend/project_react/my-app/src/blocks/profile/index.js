import React, { Component } from 'react';
import './index.css';
import {User} from '../../models/user.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.user = null;
    }

    render() {
        if (this.props.visibility) {
            this.user = this.props.user;
            return (
                <div id="player-profile">
                    <div id="profile-left">
                        <h2 className="heading">
                            Profile:
                        </h2>
                        <div className="clear"><br></br></div>

                        <div className="avatar">
                            <img src="../../../public/images/noavatar.jpg" alt="News1" title="News1"></img>
                        </div>

                    </div>

                    <div id="profile-right">
                        <h2 className="heading">General information:</h2>
                        <div className="clear"><br></br></div>
                        <div id="info-name" className="info">
                            <p>Nickname:</p>
                            <p>First name:</p>
                            <p>Surname:</p>
                            <p>Email:</p>
                            <p>Password:</p>
                        </div>
                        <div id="info-value" className="info">
                            <p>{this.user.nickname()}</p>
                            <p>{this.user.firstName()}</p>
                            <p>{this.user.surname()}</p>
                            <p>{this.user.email()}</p>
                            <p>{this.user.password()}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {Profile};
