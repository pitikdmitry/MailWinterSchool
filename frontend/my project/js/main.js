const http = window.Http;
const Block = window.Block;

const sections = {
    mainSection: new Block(document.getElementById('main_page')),
    registrationSection: new Block(document.getElementById('registration')),
    signInSection: new Block(document.getElementById('signIn')),
    playerProfileSection: new Block(document.getElementById('player-profile')),
    playersRatingSection: new Block(document.getElementById('players-rating'))
};

// preload
hideAllSections();
sections.mainSection.show();

// navigation buttons for big screen
const bigScreenButtons = {
    registrationButton: new Block(document.getElementById('registration-btn')),
    signInButton: new Block(document.getElementById('signIn-btn')),

    tournamentsButton: new Block(document.getElementById('tournament-btn')),
    gamesButton: new Block(document.getElementById('games-btn')),
    teamsButton: new Block(document.getElementById('teams-btn')),
    playersButton: new Block(document.getElementById('players-btn'))
};

// navigation buttons for small screen FULL
const smallScreenAlButtons = {
    registrationButton: bigScreenButtons.registrationButton,
    signInButton: bigScreenButtons.signInButton
};
// navigation buttons for small screen Small Menu


bigScreenButtons.registrationButton.on('click', openRegistration);
bigScreenButtons.signInButton.on('click', openSignIn);
bigScreenButtons.tournamentsButton.on('click', openTournaments);
bigScreenButtons.gamesButton.on('click', openGames);
bigScreenButtons.teamsButton.on('click', openTeams);
bigScreenButtons.playersButton.on('click', openPlayers);

function openRegistration() {
    hideAllSections();
    sections.registrationSection.show();
}

function openSignIn() {
    hideAllSections();
    sections.signInSection.show();
}

function openTournaments() {
    hideAllSections();
}

function openGames() {
    hideAllSections();
}

function openTeams() {
    hideAllSections();
}

function openPlayers() {
    hideAllSections();
}

function hideAllSections() {

    for (let [key, value] of Object.entries(sections)) {
        sections[key].hide();
    }
}
