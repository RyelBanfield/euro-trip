import { Link } from 'react-router-dom';
import AuthenticationButton from '../auth0/AuthenticationButton';

const pages = [
  { name: 'Home', path: '/euro-trip' },
  { name: 'Profile', path: '/profile' },
];

const NavBar = () => (
  <nav>
    <Link to="/euro-trip">Review Nine</Link>
    <div className="nav-links">
      {pages.map((page) => (
        <Link key={page.name} to={page.path}>
          {page.name}
        </Link>
      ))}
    </div>
    <AuthenticationButton />
  </nav>
);

export default NavBar;
