import { combineReducers } from 'redux';
import userReducer from './user';
import countriesReducer from './countries';
import favouritesReducer from './favourites';
import myFavouritesReducer from './myFavourites';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  favourites: favouritesReducer,
  myFavourites: myFavouritesReducer,
});

export default rootReducer;
