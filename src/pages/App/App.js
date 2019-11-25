import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import ProjectsPage from '../ProjectsPage/ProjectsPage';
import HomePage from '../HomePage/HomePage';

import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/MobileNav/MobileNav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MobileNav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
        </Switch>
      </div>
    )
  }
}

export default App;