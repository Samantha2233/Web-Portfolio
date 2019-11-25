import React, { Component } from 'react';
import './Projects.scss';

import Project from '../Project/Project';

class Projects extends Component {
  render() {
    return (
      <div>
        <section id="project-section" class="container">
          <h3>Projects</h3>
          <div class="row d-flex justify-content-between align-items-stretch">
            <Project />
          </div>
        </section>
      </div>
    )
  }
}

export default Projects;