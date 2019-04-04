import React, { Component } from 'react';
import './App.css';
import NavBar from './component/partial/NavBar';
import Footer from './component/partial/Footer';
import Homepage from './component/page/homepage/Homepage';
import Docs from './component/page/docs/Docs';
import {Route, Switch } from 'react-router-dom';
import loadjs from 'loadjs';

class App extends Component {
  componentWillMount() {
    /*loadjs('../public/vendor/jquery/jquery.min.js');
    loadjs('../public/vendor/bootstrap/js/bootstrap.bundle.min.js');
    loadjs('css!/../public/vendor/bootstrap/css/bootstrap.min.css');*/
  }
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
          <Route path="/Demo-React-Web-Media-Player/docs" component={Docs} />

            <Route component={Homepage} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
