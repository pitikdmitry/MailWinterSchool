(function () {
    'use strict';

    const Block = window.Block;
    const ProfileTemplate = window.profileTemplate;

    class Profile extends Block {
        constructor() {
            const el = document.createElement('div');
            el.setAttribute("id", "profile-left");
            super(el);
        }

        update(user) {
            this.clear();
            debugger;
            this.el.innerHTML = ProfileTemplate({user});
            debugger;
        }
    }

    window.Profile = Profile;

})();
