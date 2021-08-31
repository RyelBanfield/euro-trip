import { useSelector } from 'react-redux';
import CountryComponent from '../components/Country';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const countries = useSelector((state) => state.countries);
  const favourites = useSelector((state) => state.favourites);

  const currentUserFavourites = favourites.filter((fav) => fav.user_id === user.id)
    .map((fav) => fav.country_id);
  const currentUserFavouriteCountries = countries.filter((country) => currentUserFavourites
    .includes(country.id));

  return (
    <main className="profile fade-in">
      <img className="profile-picture" src={user.picture} alt={user.name} />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <div className="favourites">
        <h3>Favourites</h3>
        {currentUserFavouriteCountries.length > 0 && (
        <div className="countries">
          {currentUserFavouriteCountries.map((country) => (
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
              key={country.id}
            />
          ))}
        </div>
        )}
      </div>
    </main>
  );
};

export default Profile;
