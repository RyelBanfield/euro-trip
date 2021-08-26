const initialState = {
  searchResults: null,
  randomPhotos: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'UPDATE_RANDOM_PHOTOS':
      return {
        ...state,
        randomPhotos: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
