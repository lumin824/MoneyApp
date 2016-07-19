import { combineReducers } from 'redux';

import * as app from './app';
import * as user from './user';

export default combineReducers({
  ...app,
  ...user
});
