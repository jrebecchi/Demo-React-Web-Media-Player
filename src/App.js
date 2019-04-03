import React, { Component } from 'react';
import './App.css';
import NavBar from './component/partial/NavBar';
import Footer from './component/partial/Footer';
import Homepage from './component/page/homepage/Homepage';
import Docs from './component/page/docs/Docs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/Demo-React-Web-Media-Player/docs" component={Docs} />
          <Route path="/Demo-React-Web-Media-Player" component={Homepage} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
