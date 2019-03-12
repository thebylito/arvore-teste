import React, { Component } from 'react';
import './App.css';
import { getDateRangeObject } from './funcs';

class Three extends Component {

  render() {
    const {data, start, end} = this.props
    const dateRange = getDateRangeObject(new Date(start), new Date(end))
    const dates = [...new Set([...dateRange, ...data.map(item => ({ ...item, date: new Date(item.date) }))])]
    
    
    console.log(dates)
    return (
    <>
      {
        dates.map((item, i) => (
          <div key={i} className="item" />
        ))
      }
      </>
    );
  }
}

export default Three;
