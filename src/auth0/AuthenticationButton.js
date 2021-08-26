import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../API';
import LoginButton from './buttons/LoginButton';
import LogoutButton from './buttons/LogoutButton';

const AuthenticationButton = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

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
      });
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
