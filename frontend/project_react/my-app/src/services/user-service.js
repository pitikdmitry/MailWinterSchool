import {Http} from "../modules/http.js"
import {User} from "../models/user.js"

class UserService {
    constructor() {
        this.user = null;
        this.users = [];
        this.nickname = null;
        this.Http = Http;
    }

    register(formdata) {
        // this.Http.PostCORS('/users/create', formdata, callback);
        return this.Http.FetchPost('/users/create', formdata);
    }

    login(data) {
        // this.Http.PostCORS('/login', {email, password}, callback);
        return this.Http.FetchPost('/users/login', data);
    }

    isLoggedIn() {
        return !!this.user;
    }

    saveUser(data) {
        this.nickname = data.nickname;
        this.user = new User(data.nickname, data.first_name, data.surname, data.about, data.email, data.password, data.kills, data.deaths, data.team);
    }

    logout() {
        this.user = null;
    }

    getData() {
        // if (this.isLoggedIn() && !force) {
        //     this.user;
        // }
        return this.Http.FetchGet('/users/' + this.nickname + '/profile')
    }

    getSomeUser(nickname) {
        return this.Http.FetchGet('/users/' + nickname + '/profile')
    }

    returnData() {
        return this.user;
    }
}

export {UserService};
