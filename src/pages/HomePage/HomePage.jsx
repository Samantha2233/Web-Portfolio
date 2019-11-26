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
        <Bio />
      </div>
    )
  }
}

export default HomePage;