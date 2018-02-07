import {Profile} from "./blocks/profile/index.js";

function hideAll() {
    var profile = new Profile();
    profile.hide();
}

function showNews() {
    hideAll();
}

function showTournament() {
    hideAll();
}

function showGames() {
    hideAll();
}

function showTeams() {
    hideAll();
}

function showPlayers() {
    hideAll();
}


function showProfile() {
    hideAll();
}

function showRegistration() {
    hideAll();
}

function showSignIn() {
    hideAll();
}

function logout() {
    hideAll();
}

export {hideAll, showNews, showTournament, showGames, showTeams, showPlayers, showProfile, showRegistration, showSignIn, logout};