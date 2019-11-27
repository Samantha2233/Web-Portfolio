import React, { Component } from 'react';
import './ProjectDetailPage.scss';

class ProjectDetailPage extends Component {
  render() {
    return (
      <div>
        <h2>Visualize</h2>
        <h4>Task Manager</h4>

        <h1>PROJECT DETAIL PAGE: {this.props.match.params.projectId}</h1>
      </div>
    )
  }
}

export default ProjectDetailPage;