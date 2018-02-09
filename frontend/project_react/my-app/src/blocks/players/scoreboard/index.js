import React, { Component } from 'react';
import '../index.css';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (clickData) => {
        let value = clickData.target.outerText;
        this.props.callBack(clickData.target.id, value);
    }

    render() {
        return (
            <div className="section-paragraph">
                <p className="player-info">{this.props.playerPosition}</p>
                <a href="#"><p id="playerNickname" onClick={this.handleClick} className="player-info">{this.props.player.nickname}</p></a>
                <a href="#"><p id="playerKills" onClick={this.handleClick} className="player-info">{this.props.player.kills}</p></a>
                <a href="#"><p id="playerTeam" onClick={this.handleClick} className="player-info">{this.props.player.team}</p></a>
            </div>
        );
    }
}

export {Scoreboard};
