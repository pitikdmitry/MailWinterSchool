import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div id="logo">
                    <a href="" title="on-main">
                        <img border="0" alt="img" src="./../../../public/images/logo.png" width="70" height="70"></img>
                            <span className="title">CsGoForum</span>
                    </a>
                </div>
                <div id="navigation">
                    <a id="tournament-btn" href="#" title="Tournaments">Tournaments</a>
                    <a id="games-btn" href="#" title="Games">Games</a>
                    <a id="teams-btn" href="#" title="Teams">Teams</a>
                    <a id="players-btn" href="#" title="Players">Players</a>
                </div>

                <div id="reg-auth">
                    <a href="#" title="Sign-In">
                        <div id="signIn-btn" className="auth-btn">
                            Sign In
                        </div>
                    </a>
                    <a href="#" title="Registration">
                        <div id="registration-btn" className="auth-btn">
                            Registration
                        </div>
                    </a>
                </div>
                <div className="dropdown" id="profile-nav">
                    <button className="drop-btn">Nickname</button>
                    <div className="dropdown-content">
                        <a id='profile-btn' href="#">Profile</a>
                        <a id='logout-btn' href="#">Logout</a>
                    </div>
                </div>
                <div id="clear-navigation"></div>

                <div id="mobileMenu">
                    <a id="tournament-mobile-full-btn" href="#" title="Tournaments">Tournaments</a><br></br>
                    <a id="games-mobile-full-btn" href="#" title="Games">Games</a><br></br>
                    <a id="teams-mobile-full-btn" href="#" title="Teams">Teams</a><br></br>
                    <a id="players-mobile-full-btn" href="#" title="Players">Players</a><br></br>
                    <hr></hr>
                        <a id="signIn-mobile-full-btn" href="#" title="Sign-In">Sign In</a><br></br>
                        <a id="registration-mobile-full-btn" href="#" title="Registration">Registration</a><br></br>
                </div>
                <div id="mobileMenuWithoutReg">
                    <a id="tournament-mobile-small-btn" href="#" title="Tournaments">Tournaments</a><br></br>
                    <a id="games-mobile-small-btn" href="#" title="Games">Games</a><br></br>
                    <a id="teams-mobile-small-btn" href="#" title="Teams">Teams</a><br></br>
                    <a id="players-mobile-small-btn" href="#" title="Players">Players</a><br></br>
                </div>
            </header>
        );
    }
}

export default Header;
