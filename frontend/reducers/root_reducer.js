import { combineReducers } from 'redux';

import SenatorsReducer from './senators_reducer';

const rootReducer = combineReducers({
  senators: SenatorsReducer
});

export default rootReducer;
