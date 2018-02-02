const UserService = window.UserService;
const userService = new UserService();

const app = new Block(document.getElementById('application'));

const sections = {
    menu: Block.Create('section', {}, ['menu-section']),
    login: Block.Create('section', {}, ['login-section']),
    signup: Block.Create('section', {}, ['signup-section']),
    scores: Block.Create('section', {}, ['scores-section']),
    profile: Block.Create('section', {}, ['profile-section']),
    hide() {
        this.menu.hide();
        this.login.hide();
        this.signup.hide();
        this.scores.hide();
        this.profile.hide();
    },
};


