import React, { Component } from 'react';
import './App.css';
import NavBar from './component/partial/NavBar';
import Footer from './component/partial/Footer';
import Homepage from './component/page/homepage/Homepage';
import Docs from './component/page/docs/Docs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/docs" component={Docs} />
            <Route component={Homepage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
