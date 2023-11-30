import React from 'react';
import GitHubLogo from "../images/github-mark-white.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="github" onClick={() => location.href="https://github.com/ihavefoxdie"}>
                    <img className="github-logo" src={GitHubLogo} alt=""/>
                    <div className="montserrat-light-x-large-title">ihavefoxdie</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;