import React, { Component } from 'react';
import '../index.css';

class Scoreboard extends Component {
    render() {
        let text = [];
        for (let i = 0; i < 10; ++i) {
            let oneText = (
                <div className="section-paragraph">
                    <p className="player-info">1</p>
                    <p className="player-info">induk</p>
                    <p className="player-info">100500</p>
                    <p className="player-info">indku-team</p>
                </div>
            );
            text.append(oneText);
        }
        return text;
    }
}

export {Scoreboard};
