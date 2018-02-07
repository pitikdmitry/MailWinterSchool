import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './blocks/header/index.js'
import Footer from './blocks/footer/index.js'

class App extends Component {
  render() {
    return (
      <div id="App">
          <div id="content">
            <Header />
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
