import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root'));