// Modules
import React, { Component, Fragment } from 'react';
// Github Pages requires HashRouter to properly route subpages
// import { HashRouter as Router, Route } from 'react-router-dom';

// Styles
import './assets/scss/style.scss';

// Contexts

// Utilities

// Pages
import Index from './pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Index />
      </Fragment>
    );
  }
}

export default App;
