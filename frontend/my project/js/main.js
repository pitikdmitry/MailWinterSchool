const http = window.Http;
const Block = window.Block;

// big sections for hiding
const mainSection = new Block(document.getElementById('main_page'));
const registrationSection = new Block(document.getElementById('registration'));
const signInSection = new Block(document.getElementById('signIn'));
const playerProfileSection = new Block(document.getElementById('player-profile'));
const playersRatingSection = new Block(document.getElementById('players-rating'));


// navigation buttons
const registrationButton = new Block(document.getElementById('registration-btn'));
const signInButton = new Block(document.getElementById('signIn-btn'));

// navigation buttons for big screen
const tournamentsButton = new Block(document.getElementById('tournament-btn'));
const gamesButton = new Block(document.getElementById('games-btn'));
const teamsButton = new Block(document.getElementById('teams-btn'));
const playersButton = new Block(document.getElementById('players-btn'));


// navigation buttons for small screen FULL

// navigation buttons for small screen Small Menu
debugger;
// preload
hideAllSections();
mainSection.show();

registrationButton.on('click', openRegistration);
signInButton.on('click', openSignIn);
tournamentsButton.on('click', openTournaments);
gamesButton.on('click', openGames);
teamsButton.on('click', openTeams);
playersButton.on('click', openPlayers);
