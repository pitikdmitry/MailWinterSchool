import React, { Component } from 'react';
import './index.css';

class SomeTeam extends Component {
    render() {
        if (this.props.visibility) {
            debugger;
            return (
                <div id="team-players">
                    <h2 className="heading">Team: <span id="main-name-team">{this.props.someTeam.title}</span></h2>
                    <div className="clear"><br></br></div>
                    <div className="left">
                        <p>Players:</p>
                    </div>
                    <div className="right">
                        <p>Pig_hru_hru</p>
                        <p>Hugma</p>
                        <p>Bayba</p>
                    </div>
                    <div className="clear"><br></br></div>
                    <div className="statistics">
                        <p className="statistic_data">Games win: </p>
                        <p className="statistic_data">Games lose: </p>
                        <p className="statistic_data">Games draw: </p>
                    </div>
                    <div className="right">
                        <p>{this.props.someTeam.games_win}</p>
                        <p>{this.props.someTeam.games_lose}</p>
                        <p>{this.props.someTeam.games_draw}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {SomeTeam};
