import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import { countAction } from '../actions';
import Home from '../components/Home/Home';

let App = (props) => {
  let { count, actions } = props;
  let state = { count, actions };

  return (
    <Home {...state} />
  )
}

function mapStateToProps(state) {
  return { count: state.count.count }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(countAction, dispatch) };
}

App = connect(mapStateToProps, mapDispatchToProps)(App)


export default App;