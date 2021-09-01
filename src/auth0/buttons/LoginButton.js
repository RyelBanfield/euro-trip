import { useAuth0 } from '@auth0/auth0-react';
import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="auth-btn" type="button" onClick={() => loginWithRedirect()}>
      <i className="auth-icon">
        <FaSignInAlt />
      </i>
    </button>
  );
};

export default LoginButton;
