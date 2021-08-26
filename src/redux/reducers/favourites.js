const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FAVOURITES_INTO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
