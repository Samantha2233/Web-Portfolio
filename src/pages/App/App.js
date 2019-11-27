import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from '../HomePage/HomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ProjectDetailPage from '../ProjectDetailPage/ProjectDetailPage.jsx';

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
          <Route exact path='/projects' component={ProjectsPage} />
          <Route path='/projects/:projectId' component={ProjectDetailPage} />
        </Switch>
      </div>
    )
  }
}

export default App;