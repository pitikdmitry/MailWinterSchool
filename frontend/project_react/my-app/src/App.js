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

    handleClickRegistration = (data) => {
        this.userService.register(data, () => {});
    }

    handleSignIn = (data) => {
        this.userService.login(data, () => {});
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
                    <SignIn visibility={this.state.signIn}/>
                </div>
                <Footer/>
            </div>
    );
  }
}

export default App;
