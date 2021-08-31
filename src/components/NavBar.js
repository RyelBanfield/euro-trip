import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars, FaHome } from 'react-icons/fa';
import AuthenticationButton from '../auth0/AuthenticationButton';

const pages = [
  { name: 'Home', path: '/euro-trip' },
  { name: 'Profile', path: '/profile' },
];

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav>

      <div className="menu-icon">
        <button type="button" onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </button>
      </div>

      <Link to="/euro-trip" className="euro-trip">
        <FaHome />
      </Link>

      <div className={click ? 'mobile-links-active slide-in' : 'mobile-links-inactive'}>
        {pages.map((page) => (
          <Link key={page.name} to={page.path} onClick={closeMobileMenu}>
            {page.name}
          </Link>
        ))}
      </div>

      <div className="auth-btn-div">
        <AuthenticationButton />
      </div>

    </nav>
  );
};

export default NavBar;
