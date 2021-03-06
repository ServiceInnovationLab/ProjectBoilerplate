import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import * as actionCreators from '../actions';

class AppCon extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

const mapStateToProperties = state => state;

export default connect(
  mapStateToProperties,
  actionCreators,
)(AppCon);
