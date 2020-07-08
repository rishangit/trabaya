import { combineReducers } from 'redux';
import appReducer from '../application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
});

export default rootReducer;
