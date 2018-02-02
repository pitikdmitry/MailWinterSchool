(function () {
	'use strict';

	const Block = window.Block;
	const ScoreboardTemplate = window.scoreboardTemplate;

	class Scoreboard extends Block {
		constructor() {
			const el = document.createElement('table');
			super(el);
		}

		update(users = []) {
			this.clear();
			debugger;
			this.el.innerHTML = ScoreboardTemplate({users});
            debugger;
        }
	}

	window.Scoreboard = Scoreboard;

})();
