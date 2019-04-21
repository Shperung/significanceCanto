const initialState = {
  artists: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTISTS':
      return {
        artists: action.payload,
      };
    case 'GET_ARTIST':
      return {
        artist: action.payload,
      };
  
    default:
      return state;
  }
};

export default reducer;