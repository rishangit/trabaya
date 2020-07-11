import { combineReducers } from 'redux';
import appReducer from '../application/app.reducer';
import authReducer from '../modules/auth/auth.reducer';
import springReducer from '../modules/springBoard/springBoard.reducer';

const rootReducer = combineReducers({
  appReducer,
  authReducer,
  springReducer,
});

export default rootReducer;
