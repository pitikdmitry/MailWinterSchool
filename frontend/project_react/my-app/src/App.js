import React, { Component } from 'react';
import './App.css';
import {Header} from './blocks/header/index.js';
import {Footer} from './blocks/footer/index.js';
import {Profile} from './blocks/profile/index.js';
import {SomeUserProfile} from './blocks/SomeUserProfile/index.js';
import {Registration} from './blocks/registration/index.js';
import {SignIn} from "./blocks/signIn/index.js";
import {Players} from "./blocks/players/index.js";
import {User} from "./models/user.js";
import {UserService} from "./services/user-service.js";
import {AppService} from "./services/app-service.js";
import {TeamService} from "./services/team-service.js";
import {SomeTeam} from "./blocks/SomeTeam/index.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.appService = new AppService();
        this.teamService = new TeamService();
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
            logout: false,
            someOneProfile: false,
            someOneTeam: false
        };

        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleBestPlayers = this.handleBestPlayers.bind(this);

        this.someUser = null;
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
            logout: false,
            someOneProfile: false,
            someOneTeam: false
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
                    this.setState({
                        profile: true
                    });
                }.bind(this))
                .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
        }
    }

    showSomeOneProfile(nickname) {
        this.hideAll();
        this.userService.getSomeUser(nickname)
            .then(function(data) {
                debugger;
                this.someUser = new User(data.nickname, data.first_name, data.surname, data.about, data.email, data.password, data.kills, data.deaths, data.team);
                this.setState({
                    someOneProfile: true
                });
            }.bind(this))
            .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));

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
                this.setState({
                    players: true
                });
            }.bind(this));
    }

    showTeam(title) {
        this.hideAll();
        this.appService.getTeamByTitle(title)
            .then(function(team) {
                debugger;
                this.teamService.saveTeam(team);
                this.setState({
                    someOneTeam: true
                });
            }.bind(this));
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
        } else {
            this.userService.register(data)
                .then(function (data) {
                    this.showNews();
                    this.userService.saveUser(data);
                    this.setState({
                        nickname: data.nickname,
                        isLoggedIn: true
                    });
                }.bind(this))
                .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
        }
    }

    handleSignIn = (data) => {
        if (this.userService.isLoggedIn()) {
            this.showNews();
        } else {
            this.userService.login(data)
                .then(function (data) {
                    this.showNews();
                    this.userService.saveUser(data);
                    this.setState({
                        nickname: data.nickname_or_email,
                        isLoggedIn: true
                    });
                }.bind(this))
                .catch((err) => alert(`Some error ${err.status}: ${err.responseText}`));
        }
    }

    handleBestPlayers(refName, value) {
        switch(refName) {
            case 'playerNickname':
                this.showSomeOneProfile(value);
                break;
            case 'playerKills':
                this.showSomeOneProfile(value);
                break;
            case 'playerTeam':
                this.showTeam(value);
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div id="App">
                <div id="content">
                    <Header isLoggedIn={this.state.isLoggedIn} nickname={this.state.nickname} callBack={this.handleClick}/>
                    <Profile user={this.userService.returnData()} visibility={this.state.profile}/>
                    <SomeUserProfile someUser={this.someUser} visibility={this.state.someOneProfile}/>
                    <Registration visibility={this.state.registration} callBack={this.handleRegistration}/>
                    <SignIn visibility={this.state.signIn} callBack={this.handleSignIn}/>
                    <Players visibility={this.state.players} bestPlayers={this.appService.returnBestPlayers()} callBack={this.handleBestPlayers}/>
                    <SomeTeam visibility={this.state.someOneTeam} someTeam={this.teamService.returnTeam()} />
                </div>
                <Footer/>
            </div>
    );
  }
}

export default App;
// hi
