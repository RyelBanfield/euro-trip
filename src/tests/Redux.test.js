import userReducer from '../redux/reducers/user';
import countriesReducer from '../redux/reducers/countries';
import favouritesReducer from '../redux/reducers/favourites';
import {
  loadUserIntoStore,
  loadCountriesIntoStore,
  loadFavouritesIntoStore,
} from '../redux/actions';

it('returns the initial home state', () => {
  expect(userReducer(null, {})).toEqual(
    null,
  );
});

it('returns the initial countries state', () => {
  expect(countriesReducer(null, {})).toEqual(
    null,
  );
});

it('returns the initial favourites state', () => {
  expect(favouritesReducer(null, {})).toEqual(
    null,
  );
});

it('loads the user into the store', () => {
  expect(userReducer(null, loadUserIntoStore({
    sub: 'Redux-testing',
    name: 'tester-one',
    email: 'tester@testing.com',
  }))).toEqual({
    sub: 'Redux-testing',
    name: 'tester-one',
    email: 'tester@testing.com',
  });
});

it('loads the correct user into the store', () => {
  expect(userReducer(null, loadUserIntoStore({
    sub: 'Redux-testing',
    name: 'tester-one',
    email: 'tester@testing.com',
  }))).not.toEqual({
    sub: 'Redux-testing',
    name: 'tester-two',
    email: 'tester@testing.com',
  });
});

it('loads the countries into the store', () => {
  expect(countriesReducer(null, loadCountriesIntoStore([
    {
      name: 'test-country',
      capital: 'test-capital',
      population: 'test-population',
      flag: 'test-flag',
    },
  ]))).toEqual([
    {
      name: 'test-country',
      capital: 'test-capital',
      population: 'test-population',
      flag: 'test-flag',
    },
  ]);
});

it('loads the correct countries into the store', () => {
  expect(countriesReducer(null, loadCountriesIntoStore([
    {
      name: 'test-country',
      capital: 'test-capital',
      population: 'test-population',
      flag: 'test-flag',
    },
  ]))).not.toEqual([
    {
      name: 'test-country',
      capital: 'test-capital',
      population: 'test-population',
      flag: 'test-flag',
    },
    {
      name: 'test-country',
      capital: 'test-capital',
      population: 'test-population',
      flag: 'test-flag',
    },
  ]);
});

it('loads the favourites into the store', () => {
  expect(favouritesReducer(null, loadFavouritesIntoStore([
    {
      user_id: 1,
      country_id: 1,
    },
  ]))).toEqual([
    {
      user_id: 1,
      country_id: 1,
    },
  ]);
});

it('loads the correct favourites into the store', () => {
  expect(favouritesReducer(null, loadFavouritesIntoStore([
    {
      user_id: 1,
      country_id: 1,
    },
  ]))).not.toEqual([
    {
      user_id: 1,
      country_id: 2,
    },
  ]);
});
