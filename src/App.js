import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './testeArvore';
import Three from './Three';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
          <Three data={data} start={"2019-03-11"} end={"2019-03-15"} />
       </div>
      </div>
    );
  }
}

export default App;
