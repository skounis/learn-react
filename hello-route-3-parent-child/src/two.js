
import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router';

// The pages that make up feature "one".
import First from './First';
import Second from './Second';

// The routes of our feature. The "<Redirect>"
// handles "/one" requests by redirecting to "/one/1".
export default () => (
  <Fragment>
    <Route
      exact
      path="/two"
      render={() => <Redirect to="/two/1" />}
    />
    <Route exact path="/two/1" render={() => <p>Hello Two!</p>} />
  </Fragment>
);