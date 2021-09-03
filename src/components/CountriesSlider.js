import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CountriesSlider = ({ countries }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 800,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {countries && countries.map((country) => (
        <div key={country.id}>
          <img src={country.images[0].url} alt={country.name} />
          <div className="overlay">
            <div className="overlay-content">
              <h2>{country.name}</h2>
              <h3>{country.capital}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

CountriesSlider.propTypes = {
  countries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

export default CountriesSlider;
