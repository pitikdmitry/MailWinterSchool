const http = window.Http;
const Block = window.Block;
const Form = window.Form;
const Profile = window.Profile;
const NavBar = window.NavBar;
const Scoreboard = window.Scoreboard;
const UserService = window.UserService;

const userService = new UserService();

const navBar = new NavBar(document.getElementById('header'), 'reg-auth', 'profile-nav');

const sections = {
    app: new Block(document.getElementById('app')),
    // playersProfile: Block.Create('section', {}, ['player-profile'])
};
// sections.app.append(sections.playersProfile);

const forms = {
    registrationForm: new Form(document.getElementById('registration-form')),
    signInForm: new Form(document.getElementById('signIn-form'))
};

// preload
openMenu();
navBar.onLogout();
// navBar.onLogin();

const bigScreenButtons = {
    registrationButton: new Block(document.getElementById('registration-btn')),
    signInButton: new Block(document.getElementById('signIn-btn')),
    profileButton: new Block(document.getElementById('profile-btn')),
    logoutButton: new Block(document.getElementById('logout-btn')),

    tournamentsButton: new Block(document.getElementById('tournament-btn')),
    gamesButton: new Block(document.getElementById('games-btn')),
    teamsButton: new Block(document.getElementById('teams-btn')),
    playersButton: new Block(document.getElementById('players-btn'))
};

bigScreenButtons.registrationButton.on('click', openRegistration);
bigScreenButtons.signInButton.on('click', openSignIn);
bigScreenButtons.profileButton.on('click', openProfile);
bigScreenButtons.logoutButton.on('click', logout);
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

// function openProfile() {
//     if (!sections.playersProfile.ready) {
//         sections.playersRating.profileDiv = new Profile();
//         sections.playersRating
//             .append(Block.Create('h2', {}, [], 'Список лидеров'))
//             .append(sections.playersRating.scoreboard);
//         sections.playersRating.ready = true;
//     }
//     hideAllSections();
//
//     const users = [{
//         nickname: 'a.ostapenko@corp.mail.ru',
//         team: 'password',
//         rating: 20,
//         position: 72
//     }];
//     sections.playersRating.scoreboard.update(users);
//     sections.playersRating.show();
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

function logout() {

}