import configureStore from './store/store';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import StateButtonsContainer from "./components/state_buttons_container";

class Root extends React.Component {
  render() {
    return(
      <div>
        <StateButtonsContainer />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  ReactDOM.render(<Root store={ store }/>, document.getElementById('root'));
});
