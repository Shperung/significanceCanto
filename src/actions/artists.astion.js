


const getArtists = () => {
	fetch('http://localhost:3012/artists').then(
		resp => resp.json() // this returns a promise
	).then(data => {
		console.log('then-data', data);
	}).catch(ex => {
		console.error(ex);
	})

	
	
  return {
    type: 'GET_ARTISTS',
    payload: [],
  }
}

export {
  getArtists
};