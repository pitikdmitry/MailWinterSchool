import React, { Component } from 'react';
import {HeaderLoggedIn} from './logged_in/index.js';
import {HeaderLoggedOut} from './logged_out/index.js';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (clickData) => {
        this.props.callBack(clickData.target.id);
    }

    render() {
        return (
            <header id="header">
                <div id="logo">
                    <a href="#" id="news-btn" onClick={this.handleClick} title="on-main">
                        <img border="0" alt="img" src="./../../../public/images/logo.png" width="70" height="70"></img>
                            <span className="title">CsGoForum</span>
                    </a>
                </div>
                <div id="navigation">
                    <a id="tournament-btn" href="#" onClick={this.handleClick} title="Tournaments">Tournaments</a>
                    <a id="games-btn" href="#" onClick={this.handleClick} title="Games">Games</a>
                    <a id="teams-btn" href="#" onClick={this.handleClick} title="Teams">Teams</a>
                    <a id="players-btn" href="#" onClick={this.handleClick} title="Players">Players</a>
                </div>
                <HeaderLoggedIn isLoggedIn={this.props.isLoggedIn} nickname={this.props.nickname} callBack={this.props.callBack}/>
                <HeaderLoggedOut isLoggedIn={this.props.isLoggedIn} callBack={this.props.callBack}/>

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

export {Header};
