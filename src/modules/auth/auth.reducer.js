import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS,
  LOGOUT,
  SET_USER,
} from './auth.action';

import { LoginStatus, RegisterStatus } from './auth.constants';
import { Res } from '../../common/constants';

const initState = {
  loginStatus: LoginStatus.LOGIN_NEW,
  session: null,
  registerStatus: RegisterStatus.REGISTER_NEW,
};
const authReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loginStatus: LoginStatus.LOGIN_NEW,
      };
    case LOGIN_SUCCESS: {
      const { typ } = payload;
      if (typ === Res.SUCCESS_OBJ) {
        const { obj } = payload;
        localStorage.setItem('session', JSON.stringify(obj));
        return {
          ...state,
          session: obj,
          loginStatus: LoginStatus.LOGIN_SUCCESS,
        };
      }else{
        return {
          ...state,
          loginStatus: LoginStatus.ERROR,
        };
      }
    }
    break;
    case SET_USER:
      return {
        ...state,
        session: payload,
        loginStatus: LoginStatus.LOGIN_SUCCESS,
      };
    case REGISTER_ATTEMPT:
      break;
    case REGISTER_SUCCESS:
      break;
    case LOGOUT:
      localStorage.removeItem('session');
      localStorage.removeItem('council');
      return {
        ...state,
        session: null,
        loginStatus: LoginStatus.LOGOUT,
      };
    default:
      break;
  }
  return state;
};

export default authReducer;
