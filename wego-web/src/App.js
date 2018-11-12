import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Tour from './components/Tour';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation></Navigation>
          <Tour></Tour>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
