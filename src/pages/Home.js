import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getFavourites } from '../API';
import { loadCountriesIntoStore, loadFavouritesIntoStore } from '../redux/actions';
import CountryComponent from '../components/Country';

const Home = () => {
  const user = useSelector((state) => state.user);
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
    <main>
      <h1 className="countries-header">European countries</h1>
      {countries.length > 0 && (
        <div className="countries">
          {countries.map((country) => (
            <CountryComponent
              country={country}
              isFavourited={
                user.countries
                  ? user.countries
                    .find((favouriteCountry) => favouriteCountry.name === country.name)
                    !== undefined
                  : false
              }
              key={country.id}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
