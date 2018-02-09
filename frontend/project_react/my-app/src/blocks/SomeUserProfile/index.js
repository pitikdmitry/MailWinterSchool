import React, { Component } from 'react';
import './index.css';
import {User} from '../../models/user.js';

class SomeUserProfile extends Component {
    constructor(props) {
        super(props);
        this.someUser = null;
    }

    render() {
        if (this.props.visibility) {
            this.someUser = this.props.someUser;
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
                            <p>Kills:</p>
                            <p>Deaths:</p>
                            <p>Team</p>
                        </div>
                        <div id="info-value" className="info">
                            <p>{this.someUser.nickname()}</p>
                            <p>{this.someUser.firstName()}</p>
                            <p>{this.someUser.surname()}</p>
                            <p>{this.someUser.email()}</p>
                            <p>{this.someUser.kills()}</p>
                            <p>{this.someUser.deaths()}</p>
                            <p>{this.someUser.team()}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {SomeUserProfile};
