// @flow
import { getData } from './fetchApi';
import type { Dispatch } from 'redux';

/* GET artists*/
export const getArtists = () => {
  const URL = '/api/artists';
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'GET_ARTISTS_START'
    });
    return getData(URL).then(([res, data]) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_ARTISTS',
          payload: data
        });
      } else {
        dispatch({
          type: 'GET_ARTISTS_ERROR',
          payload: []
        });
      }
    });
  };
};

/* GET artist*/
export const getArtist = (unique: string) => {
  const URL = `/api/artists/${unique}`;
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'GET_ARTIST_START'
    });
    return getData(URL).then(([res, data]) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_ARTIST',
          payload: data
        });
      } else {
        dispatch({
          type: 'GET_ARTIST_ERROR',
          payload: []
        });
      }
    });
  };
};
