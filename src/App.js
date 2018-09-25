import React, { Component } from 'react';
import './App.css';
import Main from "./Main"
import MainMobile from "./MainMobile"

class App extends Component {
  render() {
    return window.innerWidth>500 ? <Main/>:<MainMobile/>
  }
}

export default App;
