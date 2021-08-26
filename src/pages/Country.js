import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryComponent from '../components/Country';

const Country = () => {
  const { id } = useParams();
  const countries = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === id);

  return (
    <div>
      {country && (
        <CountryComponent country={country} />
      )}
    </div>
  );
};

export default Country;
