
import { combineReducers } from 'redux';
// @ts-ignore
import storage from 'redux-persist/lib/storage';

import clientReducer from './slices/client';
// slices


// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  client: clientReducer,
});

export default rootReducer;
