import {
  postUser,
  getUsers,
  getCountries,
  getFavourites,
  postFavourite,
  deleteFavourite,
} from '../API';

const usersEndpoint = 'https://euro-trip-api.herokuapp.com/users';
const countriesEndpoint = 'https://euro-trip-api.herokuapp.com/countries';
const favouritesEndpoint = 'https://euro-trip-api.herokuapp.com/favourites';

describe('API', () => {
  it('postUser should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const user = {
      sub: 'API-testing',
      name: 'tester-one',
      email: 'tester@testing.com',
    };
    postUser(user, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      usersEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(user),
      },
    );
  });

  it('getUsers should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getUsers();
    expect(mockFetch).toHaveBeenCalledWith(
      usersEndpoint,
      {
        method: 'GET',
      },
    );
  });

  it('getCountries should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getCountries();
    expect(mockFetch).toHaveBeenCalledWith(
      countriesEndpoint,
    );
  });

  it('getFavourites should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    getFavourites();
    expect(mockFetch).toHaveBeenCalledWith(
      favouritesEndpoint,
    );
  });

  it('postFavourite should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const favourite = {
      userId: '12345',
      countryId: '12345',
    };
    postFavourite(favourite, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      favouritesEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
        body: JSON.stringify(favourite),
      },
    );
  });

  it('deleteFavourite should call fetch with the correct params', () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    deleteFavourite(1, '12345');
    expect(mockFetch).toHaveBeenCalledWith(
      `${favouritesEndpoint}/1`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer 12345',
        },
      },
    );
  });
});
