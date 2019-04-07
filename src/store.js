import { createStore } from 'redux';

import reducer from './reducers/default-reducer';

const store = createStore(reducer);

export default store;