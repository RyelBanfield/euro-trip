const usersEndpoint = 'http://localhost:3000/users';
const countriesEndpoint = 'http://localhost:3000/countries';
const favouritesEndpoint = 'http://localhost:3000/favourites';

export const postUser = async (data, accessToken) => {
  const response = await fetch(usersEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
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

export const postFavourite = async (data, accessToken) => {
  const response = await fetch(favouritesEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const favourite = await response.json();
  return favourite;
};

export const deleteFavourite = async (id, accessToken) => {
  fetch(`${favouritesEndpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  });
};
