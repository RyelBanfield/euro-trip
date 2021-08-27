/* eslint-disable react/prop-types */
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  deleteFavourite, postFavourite, getFavourites, getUsers,
} from '../API';
import { loadFavouritesIntoStore, loadUserIntoStore } from '../redux/actions';

const Favourite = ({ country, isFavourited }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const user = useSelector((state) => state.user);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const [isFavouritedState, setIsFavouritedState] = useState(isFavourited);

  const handleClick = () => {
    if (!isFavouritedState && isAuthenticated) {
      const favouriteData = {
        user_id: user.id,
        country_id: country.id,
      };
      getAccessTokenSilently()
        .then((accessToken) => postFavourite(favouriteData, accessToken))
        .then(() => {
          getFavourites()
            .then((favourites) => {
              dispatch(loadFavouritesIntoStore(favourites));
            });

          getUsers()
            .then((users) => {
              dispatch(loadUserIntoStore(users.filter((userData) => userData.sub === user.sub)[0]));
            });
        });
      setIsFavouritedState(true);
    }

    if (isFavouritedState && isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => deleteFavourite(favourites
          .find((favourite) => favourite.user_id === user.id
          && favourite.country_id === country.id).id, accessToken))
        .then(() => {
          getFavourites()
            .then((favourites) => {
              dispatch(loadFavouritesIntoStore(favourites));
            });

          getUsers()
            .then((users) => {
              dispatch(loadUserIntoStore(users.filter((userData) => userData.sub === user.sub)[0]));
            });
        });
      setIsFavouritedState(false);
    }
  };

  return (
    <>
      {isFavouritedState ? (
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
