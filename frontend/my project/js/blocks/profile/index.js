(function () {
    'use strict';

    const Block = window.Block;
    const ProfileTemplate = window.profileTemplate;

    class Profile extends Block {
        constructor(el) {
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
