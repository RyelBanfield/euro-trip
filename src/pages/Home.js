import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getFavourites } from '../API';
import { loadCountriesIntoStore, loadFavouritesIntoStore } from '../redux/actions';
import CountriesSlider from '../components/CountriesSlider';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';

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
      {countries.length > 0 ? (
        <>
          <header>
            <h1>Europe is a big place.</h1>
            <p>Get information about countries you may visit.</p>
          </header>
          <SearchBar countries={countries} />
          <CountriesSlider countries={countries} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Home;
