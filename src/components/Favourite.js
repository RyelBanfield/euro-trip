import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Favourite = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

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
