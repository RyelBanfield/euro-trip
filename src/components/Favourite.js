import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { deleteFavourite, postFavourite } from '../API';

const Favourite = ({ country, isFavourited }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const user = useSelector((state) => state.user);
  const favourites = useSelector((state) => state.favourites);

  const handleClick = () => {
    if (isFavourited && isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => deleteFavourite(favourites
          .find((favourite) => favourite.user_id === user.id
          && favourite.country_id === country.id).id, accessToken));
    }

    if (!isFavourited && isAuthenticated) {
      const favouriteData = {
        user_id: user.id,
        country_id: country.id,
      };
      getAccessTokenSilently()
        .then((accessToken) => postFavourite(favouriteData, accessToken));
    }
  };

  return (
    <>
      {isFavourited ? (
        <AiFillStar onClick={() => handleClick()} />
      ) : (
        <AiOutlineStar onClick={() => handleClick()} />
      )}
    </>
  );
};

Favourite.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  isFavourited: PropTypes.bool.isRequired,
};

export default Favourite;
