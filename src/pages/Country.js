import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryComponent from '../components/CountriesSlider';

const Country = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const countries = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === id);

  return (
    <main className="country-page fade-in">
      {country && (
        <CountryComponent
          country={country}
          isFavourited={
            user
            && user.countries
              ? user.countries
                .find((favouriteCountry) => favouriteCountry.name === country.name)
              !== undefined
              : false
          }
        />
      )}
    </main>
  );
};

export default Country;
