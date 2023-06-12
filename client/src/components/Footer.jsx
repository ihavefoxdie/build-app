import React from 'react';
import GitHubLogo from "../images/github-mark-white.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="github" onClick={() => location.href="https://github.com/ihavefoxdie"}>
                    <img className="github-logo" src={GitHubLogo} alt=""/>
                    <h6 className="montserrat-small-title">ihavefoxdie</h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;