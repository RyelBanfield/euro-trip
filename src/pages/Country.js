import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryComponent from '../components/Country';

const Country = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const countries = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === id);

  return (
    <div>
      {country && (
        <CountryComponent
          country={country}
          isFavourited={
            user.countries
              ? user.countries
                .find((favouriteCountry) => favouriteCountry.name === country.name)
              !== undefined
              : false
          }
        />
      )}
    </div>
  );
};

export default Country;
