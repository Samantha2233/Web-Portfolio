import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
  render() {
    return (
      <div>
        <div class="project col-md-6 col-lg-4">
          <img src="./images/AllTasksPage.png" alt="Screentshot Visualizer Project" />
          <div class="project-info-box row d-flex justify-content-between" />


          <div class="col-8">
            <h2>Visualize</h2>
            <h4>Task Manager</h4>
            <p class="description">Prioritize your tasks by size and color!
                Calendar included.
                </p>
            <div class="button-box">
              <button class="btn btn-sm btn-outline-dark"><a
                href="https://github.com/Samantha2233/React-Visualize"><i
                  class="fab fa-github"></i> GitHub</a></button>
              <button class="btn btn-sm btn-outline-dark"><a href="https://visualize-app.herokuapp.com/"
              ><i class="fas fa-desktop"></i> Visit Site</a></button>
            </div>
          </div>

          <div class="tech-used col-4">
            <p>React</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>JSON Web Tokens</p>
            <p>Bootstrap</p>
            <p>Sass</p>
          </div>


        </div>
      </div>
    )
  }
}

export default Project;