/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { postFavourite } from '../API';

const Favourite = ({ country }) => {
  const favourites = useSelector((state) => state.favourites);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {

  }, [isFavourite]);

  return (
    <>
      {isFavourite ? (
        <AiFillStar onClick={() => handleFavourite()} />
      ) : (
        <AiOutlineStar onClick={() => handleFavourite()} />
      )}
    </>
  );
};

export default Favourite;
