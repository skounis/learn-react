import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

// The "<Router>" is the root element of the app.
render(
  <App/>,
  document.getElementById('root')
);