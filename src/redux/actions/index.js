const LOAD_COUNTRIES_INTO_STORE = 'LOAD_COUNTRIES_INTO_STORE';

// eslint-disable-next-line import/prefer-default-export
export const loadCountriesIntoStore = (countries) => ({
  type: LOAD_COUNTRIES_INTO_STORE,
  payload: countries,
});
