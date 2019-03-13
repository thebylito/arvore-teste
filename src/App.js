import React, { Component } from 'react';
import './App.css';
import data from './testeArvore';
import Three from './Three';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
          <Three data={data} start={"2016-10-12"} end={"2017-06-08"} />
       </div>
      </div>
    );
  }
}

export default App;
