/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../API';
import { loadCountriesIntoStore } from '../redux/actions';

const Home = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    getCountries()
      .then((countries) => {
        dispatch(loadCountriesIntoStore(countries));
      });
  }, []);

  return (
    <main>
      {countries.length > 0 && (
      <>
        <h1 className="countries-header">European countries</h1>
        <div className="countries">
          {countries.map((country) => (
            <div key={country.name} className="country">
              <Link className="country-link" to={`/countries/${country.id}`}>
                <h2 className="country-name">{country.name}</h2>
              </Link>
              <img src={country.flag} alt={country.name} />
              <p className="country-capital">Capital: {country.capital}</p>
              <p className="country-population">Population: {Number(country.population).toLocaleString()}</p>
              <p className="country-language">Language: {country.language}</p>
              <p className="country-demonym">Demonym: {country.demonym}</p>
              <p className="country-currency">Currency: {country.currency}</p>
            </div>
          ))}
        </div>
      </>
      )}
    </main>
  );
};

export default Home;
