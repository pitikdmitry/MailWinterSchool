const http = window.Http;
const Block = window.Block;
const Form = window.Form;
const NavBar = window.NavBar;
const Scoreboard = window.Scoreboard;
const UserService = window.UserService;

const userService = new UserService();

const sections = {
    app: new Block(document.getElementById('app')),
    mainSection: new Block(document.getElementById('main_page')),
    playerProfileSection: new Block(document.getElementById('player-profile')),
    playersRating: Block.Create('section', {}, ['playersRating-section'])
};
const navBar = new NavBar(document.getElementById('header'), 'reg-auth', 'profile-nav');
sections.app.append(sections.playersRating);

const forms = {
    registrationForm: new Form(document.getElementById('registration-form')),
    signInForm: new Form(document.getElementById('signIn-form'))
};

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

// preload
openMenu();
// navBar.onLogout();
navBar.onLogin();


bigScreenButtons.registrationButton.on('click', openRegistration);
bigScreenButtons.signInButton.on('click', openSignIn);
bigScreenButtons.tournamentsButton.on('click', openTournaments);
bigScreenButtons.gamesButton.on('click', openGames);
bigScreenButtons.teamsButton.on('click', openTeams);
bigScreenButtons.playersButton.on('click', openPlayers);

function openRegistration() {
    forms.registrationForm.onSubmit(function(formdata) {
        userService.register(formdata, function (err, resp) {
            alert('in callback');
            if (err) {
                alert(`Some error ${err.status}: ${err.responseText}`);
                return;
            }

            forms.registrationForm.reset();

            userService.getData(function (err, resp) {
                if (err) {
                    return;
                }
                navBar.onLogin();
                openMenu();
            }, true);
        });
    }.bind(this));

    hideAllSections();
    if (userService.isLoggedIn()) {
        return openMenu();
    }
    forms.registrationForm.show();
}

function openMenu() {
    hideAllSections();
    sections.mainSection.show();
}

function openSignIn() {
    hideAllSections();
    forms.signInForm.show();
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

// function openPlayers() {
//     hideAllSections();
// }

function openPlayers() {
    if (!sections.playersRating.ready) {
        sections.playersRating.scoreboard = new Scoreboard();
        sections.playersRating
            .append(Block.Create('h2', {}, [], 'Список лидеров'))
            .append(sections.playersRating.scoreboard);
        sections.playersRating.ready = true;
    }
    hideAllSections();

    const users = [{
        nickname: 'a.ostapenko@corp.mail.ru',
        team: 'password',
        rating: 20,
        position: 72
    }];
    sections.playersRating.scoreboard.update(users);
    sections.playersRating.show();
}

function hideAllSections() {

    for (let [key, value] of Object.entries(sections)) {

        sections[key].hide();
    }
    for (let [key, value] of Object.entries(forms)) {
        forms[key].hide();
    }
    sections.app.show();
}
