import Favourite from './Favourite';

/* eslint-disable react/prop-types */
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
      {country && country.images.map((image) => (
        <img src={image.url} alt={country.capital} key={image} />
      ))}
    </div>
  </div>
);

export default Country;
