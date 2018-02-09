import React, { Component } from 'react';
import '../index.css';

class HeaderLoggedIn extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (clickData) => {
        this.props.callBack(clickData.target.id);
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className="dropdown" id="profile-nav">
                    <button className="drop-btn">{this.props.nickname}</button>
                    <div className="dropdown-content">
                        <a id='profile-btn' href="#" onClick={this.handleClick}>Profile</a>
                        <a id='logout-btn' href="#" onClick={this.handleClick}>Logout</a>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export {HeaderLoggedIn};
