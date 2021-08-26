/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';
import Favourite from './Favourite';

const Country = ({ country }) => (
  <div key={country.name} className="country">
    <Link className="country-link" to={`/countries/${country.name}`}>
      <h2 className="country-name">{country.name}</h2>
    </Link>
    <Favourite country={country} />
    <Link className="country-link" to={`/countries/${country.name}`}>
      <img src={country.flag} alt={country.name} />
    </Link>
    <p className="country-capital">Capital: {country.capital}</p>
    <p className="country-population">Population: {Number(country.population).toLocaleString()}</p>
    <p className="country-language">Language: {country.language}</p>
    <p className="country-demonym">Demonym: {country.demonym}</p>
    <p className="country-currency">Currency: {country.currency}</p>
  </div>
);

export default Country;
