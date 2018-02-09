class User {
    constructor(nickname, firstName, surname, about, email, password, kills, deaths, team) {
        this._nickname = nickname;
        this._firstName = firstName;
        this._surname = surname;
        this._about = about;
        this._email = email;
        this._password = password;
        this._kills = kills;
        this._deaths = deaths;
        this._team = team;
    }

    firstName() {
        return this._firstName;
    }
    nickname() {
        return this._nickname;
    }
    surname() {
        return this._surname;
    }
    about() {
        return this._about;
    }
    email() {
        return this._email;
    }
    password() {
        return this._password;
    }
    kills() {
        return this._kills;
    }
    deaths() {
        return this._deaths;
    }
    team() {
        return this._team;
    }

}

export {User};