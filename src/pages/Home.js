import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../API';
import { loadCountriesIntoStore } from '../redux/actions';
import CountryComponent from '../components/Country';

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
      <h1 className="countries-header">European countries</h1>
      {countries.length > 0 && (
        <div className="countries">
          {countries.map((country) => (
            <CountryComponent country={country} key={country.id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
