const initialState = {
  artists: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTISTS':
      return {
        artists: action.payload,
      };
  
    default:
      return state;
  }
};

export default reducer;