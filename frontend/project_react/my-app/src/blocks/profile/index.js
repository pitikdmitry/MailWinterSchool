import React, { Component } from 'react';
import './index.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.visibility) {
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
                            <p>{this.props.user.nickname}</p>
                            <p>{this.props.user.name}</p>
                            <p>{this.props.user.surname}</p>
                            <p>{this.props.user.email}</p>
                            <p>{this.props.user.password}</p>
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
