import {Http} from "../modules/http.js"

class AppService {
    constructor() {
        this.bestPlayers = [];
        this.Http = Http;
    }

    getBestPlayers() {
        return this.Http.FetchGet('/users/best');
    }

    returnBestPlayers() {
        return this.bestPlayers;
    }

    saveBestPlayers(players) {
        this.bestPlayers = players;
    }
}

export {AppService};
