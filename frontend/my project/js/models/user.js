(function () {
    'use strict';

    class User {
        constructor(nickname, firstName, surname, about, email, password) {
            this._nickname = nickname;
            this._firstName = firstName;
            this._surname = surname;
            this._about = about;
            this._email = email;
            this._password = password;
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

    }

    window.User = User;

})();