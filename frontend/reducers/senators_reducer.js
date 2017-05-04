import { RECEIVE_SENATORS } from '../actions/state_button_actions';

const SenatorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({

  }, state);

  switch (action.type) {
    case RECEIVE_SENATORS:
      return action.senators;

    default:
      return state;
  }
};

export default SenatorsReducer;
