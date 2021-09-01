import { useAuth0 } from '@auth0/auth0-react';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="auth-btn" type="button" onClick={() => logout({ returnTo: window.location.origin })}>
      <i className="auth-icon">
        <FaSignOutAlt />
      </i>
    </button>
  );
};

export default LogoutButton;
