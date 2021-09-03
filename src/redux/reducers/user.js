const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_USER_INTO_STORE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
