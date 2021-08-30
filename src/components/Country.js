import Favourite from './Favourite';

/* eslint-disable react/prop-types */
const Country = ({ country, isFavourited }) => {
  console.log(isFavourited);

  return (
    <>
      <h1>{country.name}</h1>
      <Favourite country={country} isFavourited={isFavourited} />
    </>
  );
};

export default Country;
