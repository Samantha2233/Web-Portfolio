import React, { Component } from 'react';
import './App.scss';

import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/MobileNav/MobileNav';
import Welcome from '../../components/Welcome/Welcome';
import Projects from '../../components/Projects/Projects';
import Bio from '../../components/Bio/Bio';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MobileNav />
        <Welcome />
        <Projects />
        <Bio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;