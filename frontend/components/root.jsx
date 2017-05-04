import React from 'react';
import { Provider } from 'react-redux';
import StateButtonsContainer from "./state_buttons_container";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return(
      <Provider store={ this.props.store }>
        <StateButtonsContainer />
      </Provider>
    );
  }
}

export default Root;
