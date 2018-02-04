(function () {
    'use strict';

    const Block = window.Block;

    class Form extends Block {
        constructor(el) {
            super(el);
        }

        onSubmit(callback) {
            this.el.addEventListener('submit', function (e) {
                e.preventDefault();
                const formdata = {};
                const elements = this.el.getElementsByTagName('input');

                for (let i = 0; i < elements.length; i++) {
                    let input = elements[i];
                    formdata[input.name] = input.value;
                }
                callback(formdata);
            }.bind(this));
        }

        reset() {
            this.el.reset();
        }
    }

    window.Form = Form;

})();
