import { combineReducers } from 'redux';
import userReducer from './user';
import countriesReducer from './countries';
import imagesReducer from './images';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countriesReducer,
  images: imagesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
