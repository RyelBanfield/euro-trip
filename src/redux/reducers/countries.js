const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_COUNTRIES_INTO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
