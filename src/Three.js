import React, { Component } from 'react';
import './App.css';
import { getDateRangeObject } from './funcs';
import Tooltip from './Tooltip';

class Three extends Component {
  state = {
    ready: false,
    graph: [],
    min: 0,
    max: 0,
  };

  componentDidMount() {
    this.renderGrap();
  }

  getCount = async ({ date }) => {
    const { data } = this.props;
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ];
    const query = `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day,
    ).padStart(2, '0')}`;
    const res = data.find((item) => item.date === query);
    return res ? res.count : 0;
  };

  renderGrap = async () => {
    const { data, start, end } = this.props;
    const dateRange = getDateRangeObject(start, end);
    const datesP = dateRange.map(async (item) => ({
      ...item,
      count: await this.getCount(item),
    }));

    const dates = await Promise.all(datesP);
    const min = data.reduce(
      (min, p) => (p.count < min ? p.count : min),
      data[0].count,
    );
    const max = data.reduce(
      (max, p) => (p.count > max ? p.count : max),
      data[0].count,
    );
    this.setState({
      min,
      max,
      graph: dates,
      ready: true,
    });
  };
  render() {
    const { ready, graph, min, max } = this.state;
    const opacity = (count) => {
      if (count === 0) return '#d7d8d6';
      const res = (count * 100) / max / 100;
      console.log(res);
      return res > 1 ? `rgb(43, 137, 0,1)` : `rgb(43, 137, 0, ${res})`;
    };
    //console.log(dates);
    return (
      <>
        {ready ? (
          <>
            {graph.map((item, i) => {
              return (
                <Tooltip
                  key={i}
                  position={'top'}
                  message={`${item.count} contribuições em ${item.date.toDateString()}`}
                >
                  <div
                    className="item"
                    style={{
                      backgroundColor: opacity(item.count),
                    }}
                  />
                </Tooltip>
              );
            })}
          </>
        ) : (
          <div>loading</div>
        )}
      </>
    );
  }
}

export default Three;
