import React from 'react';
import { Provider } from 'react-redux';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <Provider store={ store }>
        <StateButtonsContainer />
      </Provider>
    );
  }
}

export default Root;
