import React, { Component } from 'react';
import './HomePage.scss';

import Welcome from '../../components/Welcome/Welcome'
import Projects from '../../components/Projects/Projects'
import Bio from '../../components/Bio/Bio';


class HomePage extends Component {


  render() {
    return (
      <div className='homepage'>
        <Welcome />
        <Projects />
        <div className='button-box'>
          <button className='btn btn-sm' onClick={() => this.props.history.push('/projects')}>View All Projects</button>
        </div>
        <Bio />
      </div>
    )
  }
}

export default HomePage;