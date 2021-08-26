import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Favourite = ({ isFavourited }) => (
  <>
    {isFavourited ? (
      <AiFillStar />
    ) : (
      <AiOutlineStar />
    )}
  </>
);

Favourite.propTypes = {
  isFavourited: PropTypes.bool.isRequired,
};

export default Favourite;
