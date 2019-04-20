
function fetchPosts() {
  const URL = "/api/artists";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

export const getArtists = () => {
	return (dispatch) => {
  	dispatch(
			{
				type: "GET_ARTISTS_START"
			}
		);
    return fetchPosts().then(([response, data]) =>{
    	if(response.status === 200){
      	dispatch({
					type: 'GET_ARTISTS',
					payload: data,
				})
      }
      else{
      	dispatch({
					type: "GET_ARTISTS_ERROR",
					payload: [],
				})
      }
    })
  }
}