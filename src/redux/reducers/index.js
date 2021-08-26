import { combineReducers } from 'redux';
import userReducer from './user';
import countriesReducer from './countries';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
