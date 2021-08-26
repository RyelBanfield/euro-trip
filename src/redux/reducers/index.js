import { combineReducers } from 'redux';
import countriesReducer from './countries';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default rootReducer;
