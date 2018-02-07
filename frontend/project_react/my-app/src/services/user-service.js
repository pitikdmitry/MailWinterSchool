import {Http} from "../modules/http.js"
import {User} from "../models/user.js"

class UserService {
    constructor() {
        this.user = null;
        this.users = [];
        this.nickname = null;
        this.Http = Http;
    }

    register(formdata, callback) {
        debugger;
        this.Http.PostCORS('/users/create', formdata, callback);
        // Http.FetchPost('/users/create', formdata);
        this.nickname = formdata['nickname'];
    }

    login(email, password, callback) {
        this.Http.Post('/login', {email, password}, callback);
    }

    isLoggedIn() {
        return !!this.user;
    }

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

export {UserService};
