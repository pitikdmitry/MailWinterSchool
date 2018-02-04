(function () {
    'use strict';

    const Block = window.Block;

    class NavBar extends Block {
        constructor(el, unreg_id, reg_id) {
            super(el);
            this._unregisteredPart = new Block(document.getElementById(unreg_id));
            this._registeredPart = new Block(document.getElementById(reg_id));
        }

        onLogin() {
            this._registeredPart.show();
            this._unregisteredPart.hide();
        }

        onLogout() {
            this._registeredPart.hide();
            this._unregisteredPart.show();
        }
    }

    window.NavBar = NavBar;

})();
