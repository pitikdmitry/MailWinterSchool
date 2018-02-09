import React, { Component } from 'react';
import {Scoreboard} from './scoreboard/index.js';
import './index.css';

class Players extends Component {
    render() {
        if (this.props.visibility) {
            return (
                <div id="players-rating">
                    <h2 className="heading">Best players: </h2>
                    <div className="clear"><br></br></div>
                    <div className="section-paragraph">
                        <p id="player-position" className="player-info player-info-column-name"><span>Position</span>
                        </p>
                        <p id="player-nickname" className="player-info player-info-column-name"><span>Nickname</span>
                        </p>
                        <p id="player-rating" className="player-info player-info-column-name"><span>Rating</span></p>
                        <p id="player-team" className="player-info player-info-column-name"><span>Team</span></p>
                    </div>
                    <div className="clear"><br></br></div>
                    <Scoreboard />
                </div>
            );
        } else {
            return null;
        }
    }
}

export {Players};
