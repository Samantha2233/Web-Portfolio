import React from 'react';
import './Welcome.scss';

import TechButtons from '../TechButtons/TechButtons';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <section id="welcome-section">
          <div class='lightBlueBG'></div>
          <div id="welcome-words">
            <h1>Portfolio</h1>
            <p> Hey, I'm Samanatha! Here are a few web applications I've been working on over the past year.</p>
            <p> Click on the buttons below to see which projects they're used in: </p>
          </div>
          <TechButtons />
        </section>
      </div>
    )
  }
}

export default Welcome;