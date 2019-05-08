import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import '../styles/App.css';

class App extends Component {
  render() {
    return <div>Project Boilerplate</div>;
  }
}

function mapStateToProperties(state) {
  return { state };
}

export default connect(
  mapStateToProperties,
  actionCreators,
)(App);
