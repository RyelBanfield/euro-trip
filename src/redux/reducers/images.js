const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_IMAGES_INTO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default imagesReducer;
