import React, { Component } from 'react';
import './App.css';
import {Header} from './blocks/header/index.js';
import {Footer} from './blocks/footer/index.js';
import {Profile} from './blocks/profile/index.js';
import {Registration} from './blocks/registration/index.js';
import {SignIn} from "./blocks/signIn";
import {UserService} from "./services/user-service.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            header: true,
            news: false,
            tournament: false,
            games: false,
            teams: false,
            players: false,
            profile: false,
            registration: false,
            signIn: false,
            logout: false
        };

        this.handleClickRegistration = this.handleClickRegistration.bind(this);
    }

    hideAll() {
        this.setState({
            news: false,
            tournament: false,
            games: false,
            teams: false,
            players: false,
            profile: false,
            registration: false,
            signIn: false,
            logout: false
        });
    }

    showNews() {
        this.hideAll();
    }

    showProfile() {
        this.hideAll();
        this.setState({
            profile: true
        });
    }

    showRegistration() {
        this.hideAll();
        this.setState({
            registration: true,
        });
    }

    showSignIn() {
        this.hideAll();
        this.setState({
            signIn: true,
        });
    }

    handleClick = (buttonId) => {
        switch(buttonId) {
            case 'news-btn':
                // this.showNews();
                break;
            case 'tournament-btn':
                break;
            case 'games-btn':

                break;
            case 'teams-btn':

                break;
            case 'players-btn':

                break;
            case 'registration-btn':
                this.showRegistration();
                break;
            case 'signIn-btn':
                this.showSignIn();
                break;
            case 'profile-btn':
                this.showProfile();
                break;
            case 'logout-btn':

                break;
            default:

                break;
        }
    }

    handleClickRegistration(data) {
        if (this.userService.isLoggedIn()) {
            this.showNews();
        }
        this.userService.register(data)
            .then(function (data) {
                debugger;
                this.showNews();
                this.userService.saveUser(data);
            }.bind(this))
            .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
    }

    handleSignIn = (data) => {
        if (this.userService.isLoggedIn()) {
            this.showNews();
        }
        this.userService.login(data)
            .then(function (data) {
                debugger;
                this.showNews();
                this.userService.saveUser(data);
            }.bind(this))
            .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
    }

    render() {
        var user_1 = {
            nickname: "nick",
            name: "name",
            surname: "surn",
            email: "@yandex.ru",
            password: "123"
        };
        return (
            <div id="App">
                <div id="content">
                    <Header visibility={this.state.header} callBack={this.handleClick}/>
                    <Profile user={user_1} visibility={this.state.profile}/>
                    <Registration visibility={this.state.registration} callBack={this.handleClickRegistration}/>
                    <SignIn visibility={this.state.signIn} callBack={this.handleSignIn}/>
                </div>
                <Footer/>
            </div>
    );
  }
}

export default App;
