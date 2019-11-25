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
            <br />
            <p> A <span class="medium">Front-End Developer</span> with</p>
            <p id="third-p"><span class="medium">Full-Stack</span> knowledge and an</p>
            <p><span class="medium">admiration</span> for <span class="medium">UX/UI Design</span>.</p>
          </div>
          <TechButtons />
        </section>
      </div>
    )
  }
}

export default Welcome;