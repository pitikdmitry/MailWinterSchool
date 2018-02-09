import React, { Component } from 'react';
import './App.css';
import {Header} from './blocks/header/index.js';
import {Footer} from './blocks/footer/index.js';
import {Profile} from './blocks/profile/index.js';
import {Registration} from './blocks/registration/index.js';
import {SignIn} from "./blocks/signIn/index.js";
import {Players} from "./blocks/players/index.js";
import {UserService} from "./services/user-service.js";
import {AppService} from "./services/app-service.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.appService = new AppService();
        this.state = {
            isLoggedIn: false,
            nickname: null,
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

        this.handleRegistration = this.handleRegistration.bind(this);
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
        if(this.userService.isLoggedIn()) {
            this.userService.getData()
                .then(function(data) {
                    this.userService.saveUser(data);
                }.bind(this))
                .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
            this.setState({
                profile: true
            });
        }
    }

    showRegistration() {
        this.hideAll();
        this.setState({
            registration: true
        });
    }

    showSignIn() {
        this.hideAll();
        this.setState({
            signIn: true
        });
    }

    logout() {
        this.userService.logout();
        this.setState({
            isLoggedIn: false
        });
        this.showNews();
    }

    showPlayers() {
        this.hideAll();
        this.appService.getBestPlayers()
            .then(function(players) {
                this.appService.saveBestPlayers(players);
            }.bind(this));
        this.setState({
            players: true
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
                this.showPlayers();
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
                this.logout();
                break;
            default:

                break;
        }
    }

    handleRegistration(data) {
        if (this.userService.isLoggedIn()) {
            this.showNews();
        }
        this.userService.register(data)
            .then(function (data) {
                this.showNews();
                this.userService.saveUser(data);
            }.bind(this))
            .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
        this.setState({
            nickname: data.nickname,
            isLoggedIn: true
        });
    }

    handleSignIn = (data) => {
        if (this.userService.isLoggedIn()) {
            this.showNews();
        }
        this.userService.login(data)
            .then(function (data) {
                this.showNews();
                this.userService.saveUser(data);
            }.bind(this))
            .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));

        this.setState({
            nickname: data.nickname_or_email,
            isLoggedIn: true
        });
        debugger;
    }

    render() {

        return (
            <div id="App">
                <div id="content">
                    <Header isLoggedIn={this.state.isLoggedIn} nickname={this.state.nickname} callBack={this.handleClick}/>
                    <Profile user={this.userService.returnData()} visibility={this.state.profile}/>
                    <Registration visibility={this.state.registration} callBack={this.handleRegistration}/>
                    <SignIn visibility={this.state.signIn} callBack={this.handleSignIn}/>
                    <Players visibility={this.state.players} bestPlayers={this.appService.returnBestPlayers()}/>
                </div>
                <Footer/>
            </div>
    );
  }
}

export default App;
