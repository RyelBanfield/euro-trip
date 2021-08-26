const userEndpoint = 'http://localhost:3000/users';
const favouriteEndpoint = 'http://localhost:3000/favourites';

export const postUser = async (data, accessToken) => {
  const response = await fetch(userEndpoint, {
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
  const response = await fetch(userEndpoint, {
    method: 'GET',
  });
  const users = await response.json();
  return users;
};

export const getfavourites = async () => {
  const response = await fetch(favouriteEndpoint);
  const favourites = await response.json();
  return favourites;
};

export const getfavourite = async (id) => {
  const response = await fetch(`${favouriteEndpoint}/${id}`);
  const favourite = await response.json();
  return favourite;
};

export const postfavourite = async (data, accessToken) => {
  const response = await fetch(favouriteEndpoint, {
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

export const deletefavourite = async (id, accessToken) => {
  fetch(`${favouriteEndpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
  });
};
