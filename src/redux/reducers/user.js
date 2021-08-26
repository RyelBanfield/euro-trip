const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_INTO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
