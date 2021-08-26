import { combineReducers } from 'redux';
import countriesReducer from './countries';
import favouritesReducer from './favourites';
import userReducer from './user';

const rootReducer = combineReducers({
  countries: countriesReducer,
  favourites: favouritesReducer,
  user: userReducer,
});

export default rootReducer;
