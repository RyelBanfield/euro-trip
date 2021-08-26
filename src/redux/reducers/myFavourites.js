const myFavouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MY_FAVOURITES_INTO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default myFavouritesReducer;
