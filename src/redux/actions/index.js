const LOAD_USER_INTO_STORE = 'LOAD_USER_INTO_STORE';
const LOAD_COUNTRIES_INTO_STORE = 'LOAD_COUNTRIES_INTO_STORE';
const LOAD_FAVOURITES_INTO_STORE = 'LOAD_FAVOURITES_INTO_STORE';

export const loadUserIntoStore = (user) => ({
  type: LOAD_USER_INTO_STORE,
  payload: user,
});

export const loadCountriesIntoStore = (countries) => ({
  type: LOAD_COUNTRIES_INTO_STORE,
  payload: countries,
});

export const loadFavouritesIntoStore = (favourites) => ({
  type: LOAD_FAVOURITES_INTO_STORE,
  payload: favourites,
});
