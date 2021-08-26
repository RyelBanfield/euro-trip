/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Favourite = ({ isFavourited }) => (
  <>
    {isFavourited ? (
      <AiFillStar />
    ) : (
      <AiOutlineStar />
    )}
  </>
);

export default Favourite;
