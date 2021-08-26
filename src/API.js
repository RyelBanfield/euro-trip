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

export const getUser = async (id) => {
  const response = await fetch(`${usersEndpoint}/${id}`);
  const user = await response.json();
  return user;
};

export const getCountries = async () => {
  const response = await fetch(countriesEndpoint);
  const countries = await response.json();
  return countries;
};

export const getCountry = async (id) => {
  const response = await fetch(`${countriesEndpoint}/${id}`);
  const country = await response.json();
  return country;
};

export const getFavourites = async () => {
  const response = await fetch(favouritesEndpoint);
  const favourites = await response.json();
  return favourites;
};

export const getFavourite = async (id) => {
  const response = await fetch(`${favouritesEndpoint}/${id}`);
  const favourite = await response.json();
  return favourite;
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
