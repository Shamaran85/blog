import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
// import Content from './Content/Content';

import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="content">
          <Main />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
