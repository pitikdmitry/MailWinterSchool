(function() {
    'use strict';

    function openRegistration() {
        hideAllSections();
        registrationSection.show();
    }

    function openSignIn() {
        hideAllSections();
        signInSection.show();
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
        mainSection.hide();
        registrationSection.hide();
        signInSection.hide();
        playerProfileSection.hide();
        playersRatingSection.hide();
    }

    window.openRegistration = openRegistration;
    window.openSignIn = openSignIn;
    window.openTournaments = openTournaments;
    window.openGames = openGames;
    window.openTeams = openTeams;
    window.openPlayers = openPlayers;
    window.hideAllSections = hideAllSections;
})();
