import React, { Component } from 'react';
import './MobileNav.scss';

class MobileNav extends Component {
  render() {
    return (
      <div>
        <div id="mobile-nav">
          <a id="welcome" className="nav-link scroll active" href="#welcome-section">Welcome</a>
          <a id="skills" className="nav-link scroll" href="#skills-section">Skills</a>
          <a id="projects" className="nav-link scroll" href="#project-section">Projects</a>
          <a id="bio-and-contact" className="nav-link scroll" href="#bio-contact-section">Bio & Contact</a>
        </div>
      </div>
    )
  }
}

export default MobileNav;