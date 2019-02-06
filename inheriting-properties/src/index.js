import React from 'react';
import { render } from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const users = ['User 1', 'User 2'];

const groups = ['Group 1', 'Group 2'];

render(
  <section>
    {/* Renders as expected, using the defaults. */}
    <ErrorBoundary>
      <h1>Test 1</h1>
      <MyComponent />
    </ErrorBoundary>

    {/* Renders as expected, using the "groups" default. */}
    <ErrorBoundary>
      <h1>Test 2</h1>
      <MyComponent users={users} />
      <hr />
    </ErrorBoundary>

    {/* Renders as expected, using the "users" default. */}
    <ErrorBoundary>
      <h1>Test 3</h1>
      <MyComponent groups={groups} />
      <hr />
    </ErrorBoundary>

    {/* Renders as expected, providing property values. */}
    <ErrorBoundary>
      <h1>Test 4</h1>
      <MyComponent users={users} groups={groups} />
    </ErrorBoundary>

    {/* Fails to render, the property validators in the base
         component detect the invalid number type. */}
    <ErrorBoundary>
      <h1>Test 5</h1>
      <MyComponent users={0} groups={0} />
    </ErrorBoundary>
  </section>,
  document.getElementById('root')
);
