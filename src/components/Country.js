import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const Country = ({ countries }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {Array.isArray(countries)
        && countries.map((country) => (
          <div key={country.name}>
            <img src={country.flag} alt={country.name} />
            <h3>{country.name}</h3>
          </div>
        ))}

      {!Array.isArray(countries)
        && (
          <div key={countries.name}>
            <img src={countries.flag} alt={countries.name} />
            <h3>{countries.name}</h3>
          </div>
        )}
    </Slider>
  );
};

Country.propTypes = {
  countries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

export default Country;
