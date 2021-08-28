import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getFavourites } from '../API';
import { loadCountriesIntoStore, loadFavouritesIntoStore } from '../redux/actions';
import CountryComponent from '../components/Country';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    getCountries()
      .then((countries) => {
        dispatch(loadCountriesIntoStore(countries));
      });

    getFavourites()
      .then((favourites) => {
        dispatch(loadFavouritesIntoStore(favourites));
      });
  }, []);

  return (
    <main className="home fade-in">
      <h1 className="countries-header">European countries</h1>
      {countries.length > 0 && (
        <CountryComponent countries={countries} />
      )}
      <SearchBar />
    </main>
  );
};

export default Home;
