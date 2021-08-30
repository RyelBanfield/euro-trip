import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import Favourite from './Favourite';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Country = ({ country, isFavourited }) => (
  <div className="country">
    <h1>{country.name}</h1>
    <Favourite country={country} isFavourited={isFavourited} />
    <p>{`Capital: ${country.capital}`}</p>
    <p>{`Population: ${Number(country.population).toLocaleString()}`}</p>
    <p>{`Language: ${country.language}`}</p>
    <p>{`Demonym: ${country.demonym}`}</p>
    <p>{`Currency: ${country.currency}`}</p>
    <div className="country-images">
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <Carousel
        autoPlay
        emulateTouch
        interval={2500}
        infiniteLoop
        showIndicators={false}
        stopOnHover={false}
      >
        {country && country.images.map((image) => (
          <img src={image.url} alt={country.capital} key={image} />
        ))}
      </Carousel>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    demonym: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  isFavourited: PropTypes.bool.isRequired,
};

export default Country;
