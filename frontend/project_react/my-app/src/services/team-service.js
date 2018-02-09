import {Http} from "../modules/http.js"

class TeamService {
    constructor() {
        this.team = null;
        this.Http = Http;
    }

    getTeamByTitle(title) {
        return this.Http.FetchGet('/teams/' + title + '/profile');
    }

    saveTeam(team) {
        this.team = team;
    }

    returnTeam() {
        return this.team;
    }
}

export {TeamService};
