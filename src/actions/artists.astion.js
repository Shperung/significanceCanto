import config from '../config.js';

console.log('config', config);

function fetchPosts() {
  const URL = `${config.fetchPath}/api/artists`;
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

/* GET artist*/

function fetchPost(unique) {
  const URL = `${config.fetchPath}/api/artists/${unique}`;
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

export const getArtist = (unique) => {
	return (dispatch) => {
  	dispatch(
			{
				type: "GET_ARTIST_START"
			}
		);
    return fetchPost(unique).then(([response, data]) =>{
    	if(response.status === 200){
      	dispatch({
					type: 'GET_ARTIST',
					payload: data,
				})
      }
      else{
      	dispatch({
					type: "GET_ARTIST_ERROR",
					payload: [],
				})
      }
    })
  }
}