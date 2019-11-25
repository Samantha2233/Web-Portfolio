import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div>
        <a href="#welcome-section">
          <img className="logo" src="./images/logo.png" alt="logo" />
        </a>
        <img id="hamburger" src="./images/hamburger-black.png" alt="hamburger-menu" />
        <img id="exit" src="./images/exit-icon.png" alt="exit-menu" />

        <div className="navbar-nav nav-items">
          <a className="nav-link scroll active" href="#welcome-section">Welcome</a>
          <a className="nav-link scroll" href="#skills-section">Skills</a>
          <a className="nav-link scroll" href="#project-section">Projects</a>
          <a className="nav-link scroll" href="#bio-contact-section">Bio & Contact</a>
        </div>
      </div>
    )
  }
}

export default Nav;