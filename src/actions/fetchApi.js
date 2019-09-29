// @flow
import config from '../config.js';

export const getData = (url: string) => {
  const path = `${config.fetchPath}${url}`;
  console.log('getData path', path);
  return fetch(path, { method: 'GET' }).then(response => Promise.all([response, response.json()]));
};
