(function () {
    'use strict';

    const Http = window.Http;

    /**
     * Сервис для работы с юзерами
     * @module UserService
     */
    class UserService {
        constructor() {
            this.user = null;
            this.users = [];
            this.nickname = null;
        }

        /**
         * Регистрирует нового пользователя
         * @param {string} email
         * @param {string} password
         * @param {number} age
         * @param {Function} callback
         */
        register(formdata, callback) {
            Http.PostCORS('/users/create', formdata, callback);
            // Http.FetchPost('/users/create', formdata);
            this.nickname = formdata['nickname'];
        }

        /**
         * Авторизация пользователя
         * @param {string} email
         * @param {string} password
         * @param {Function} callback
         */
        login(email, password, callback) {
            Http.Post('/login', {email, password}, callback);
        }

        /**
         * Проверяет, авторизован ли пользователь
         * @return {boolean}
         */
        isLoggedIn() {
            return !!this.user;
        }

        /**
         * Загружает данные о текущем пользователе
         * @param {Function} callback
         * @param {boolean} [force=false] - игнорировать ли кэш?
         */
        getData(callback, force = false) {
            if (this.isLoggedIn() && !force) {
                return callback(null, this.user);
            }

            Http.GetCORS('/users/' + this.nickname + '/profile', function (err, userdata) {
                if (err) {
                    return callback(err, userdata);
                }
                debugger;
                this.user = new User(userdata['nickname'], userdata['first_name'], userdata['surname'],
                    userdata['about'], userdata['email'], userdata['password']);
                this.nickname = userdata['nickname'];
                callback(null, userdata);
            }.bind(this));
        }

        /**
         * Загружает список всех пользователей
         * @param callback
         */
        loadUsersList(callback) {
            Http.Get('/users', function (err, users) {
                if (err) {
                    return callback(err, users);
                }

                this.users = users;

                if (this.isLoggedIn()) {
                    this.users = this.users.map(user => {
                        if (user.email === this.user.email) {
                            user.me = true;
                        }
                        return user;
                    });
                }

                callback(null, this.users);
            }.bind(this));
        }
    }

    window.UserService = UserService;

})();
