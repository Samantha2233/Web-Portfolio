import React, { Component } from 'react';
import './HomePage.scss';

import Welcome from '../../components/Welcome/Welcome'
import Projects from '../../components/Projects/Projects'
import Bio from '../../components/Bio/Bio';

import PROJECT_DATA from '../../components/Projects/projects.data';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECT_DATA
    }
  }


  render() {
    const { projects } = this.state;
    return (
      <div className='homepage'>
        <Welcome />
        {
          projects.map(({ ...otherProjectProps }, idx) => (
            <Projects key={idx} {...otherProjectProps} />
          ))
        }
        <Bio />
      </div>
    )
  }
}

export default HomePage;