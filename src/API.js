const usersEndpoint = 'https://euro-trip-api.herokuapp.com/users';
const countriesEndpoint = 'https://euro-trip-api.herokuapp.com/countries';
const favouritesEndpoint = 'https://euro-trip-api.herokuapp.com/favourites';

export const postUser = (data, accessToken) => {
  fetch(usersEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const getUsers = async () => {
  const response = await fetch(usersEndpoint, {
    method: 'GET',
  });
  const users = await response.json();
  return users;
};

export const getCountries = async () => {
  const response = await fetch(countriesEndpoint);
  const countries = await response.json();
  return countries;
};

export const getFavourites = async () => {
  const response = await fetch(favouritesEndpoint);
  const favourites = await response.json();
  return favourites;
};

export const postFavourite = (data, accessToken) => {
  fetch(favouritesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteFavourite = (id, accessToken) => {
  fetch(`${favouritesEndpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  });
};
