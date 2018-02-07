import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div id="site-name" className="heading">
                    <span>CsGoForum</span>
                </div>
                <div className="clear"></div>

                <div id="footer-menu">
                    <a href="" title="">something</a>
                    <a href="" title="">Support us</a>
                    <a href="" title="">About us</a>
                </div>
                <div id="rights">
                    <a href="">All rights reserved &copy; 2018</a>
                </div>
                <div id="social">
                    <a href="" title="vk"><i className="fa fa-vk" aria-hidden="true"></i></a>
                    <a href="" title="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="" title="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
    </footer>
        );
    }
}

export default Footer;
