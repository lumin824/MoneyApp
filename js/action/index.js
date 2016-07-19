import api from './api';
import * as app from './app';
import * as wilddog from './wilddog';

export default {
  ...api,
  ...app,
  ...wilddog
}
