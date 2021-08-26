import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favourite from './Favourite';

const Country = ({ country, isFavourited }) => (
  <div key={country.name} className="country">
    <Link className="country-link" to={`/countries/${country.name}`}>
      <h2 className="country-name">{country.name}</h2>
    </Link>
    <Favourite isFavourited={isFavourited} />
    <Link className="country-link" to={`/countries/${country.name}`}>
      <img src={country.flag} alt={country.name} />
    </Link>
    <p className="country-capital">
      Capital:
      {' '}
      {country.capital}
    </p>
    <p className="country-population">
      Population:
      {' '}
      {Number(country.population).toLocaleString()}
    </p>
    <p className="country-language">
      Language:
      {' '}
      {country.language}
    </p>
    <p className="country-demonym">
      Demonym:
      {' '}
      {country.demonym}
    </p>
    <p className="country-currency">
      Currency:
      {' '}
      {country.currency}
    </p>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    demonym: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
  isFavourited: PropTypes.bool.isRequired,
};

export default Country;
