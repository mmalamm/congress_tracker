import configureStore from './store/store';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  ReactDOM.render(<Root store={ store }/>, document.getElementById('root'));
});
