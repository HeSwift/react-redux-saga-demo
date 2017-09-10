import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Perf from 'react-addons-perf';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    
  }
  

  componentWillUnmount() {
    let { timer } = this.state;
    clearInterval(timer);
    Perf.getLastMeasurements();
  }

  componentDidUpdate(prevProps, prevState) {
    Perf.stop();
    let measurements = Perf.getLastMeasurements()
    Perf.printInclusive(measurements);
    Perf.printExclusive(measurements);
    Perf.printWasted(measurements);
    Perf.printOperations(measurements);
  }

  handleAdd = (e) => {
    e.preventDefault();
    Perf.start();
    let { timer } = this.state;
    let { count, actions } = this.props;
    let { addCount } = actions;
    if (timer == null) {
      const timer = setInterval(addCount.bind(this, count), 1000);
      this.setState({ timer })
    }
  }

  render() {
    let { count, actions } = this.props;
    let { minusCount, addCount } = actions;

    return (
      <div>
        <p>{count}</p>
        <button onClick={this.handleAdd}>循环增加</button>
        <button onClick={addCount.bind(this, count)}>增加</button>
        <button onClick={minusCount.bind(this, count)}>減少</button>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number,
};

export default Home;