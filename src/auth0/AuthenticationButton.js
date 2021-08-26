import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { getUsers, postUser } from '../API';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';
import { loadUserIntoStore } from '../redux/actions';

const AuthenticationButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();

  if (isAuthenticated) {
    const userData = {
      sub: user.sub,
      email: user.email,
      name: user.name,
      given_name: user.given_name,
      family_name: user.family_name,
      picture: user.picture,
    };

    getAccessTokenSilently()
      .then((accessToken) => {
        postUser(userData, accessToken);
        getUsers()
          .then((users) => {
            dispatch(loadUserIntoStore(users.filter((user) => user.sub === userData.sub)[0]));
          });
      });
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
