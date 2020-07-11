import {
  SPRINGBOARD_ADD_USER_ATTEMPT,
  SPRINGBOARD_ADD_USER_SUCCESS,
  SPRINGBOARD_LIST_USER_ATTEMPT,
  SPRINGBOARD_LIST_USER_SUCCESS,
  SPRINGBOARD_REMOVE_USER_ATTEMPT,
  SPRINGBOARD_REMOVE_USER_SUCCESS,
  SPRINGBOARD_NEW_USER_STATUS
} from './springBoard.action';

import { SpringUserStatus } from './springBoard.constants';
import { Res } from '../../common/constants';

const initState = {
  newUserStatus: SpringUserStatus.USER_NEW,
  userList: [],
};
const springReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SPRINGBOARD_ADD_USER_ATTEMPT:
      return {
        ...state,
        newUserStatus: SpringUserStatus.USER_NEW,
      };
    case SPRINGBOARD_ADD_USER_SUCCESS:
      {
        const { typ } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          const { obj } = payload;
          return {
            ...state,
            userList: [...state.userList, obj],
            newUserStatus: SpringUserStatus.USER_SUCCESS,
          };
        } else {
          return {
            ...state,
            newUserStatus: SpringUserStatus.ERROR,
          };
        }
      }
    case SPRINGBOARD_LIST_USER_SUCCESS:
      {
        const { typ } = payload;
        if (typ === Res.SUCCESS_LIST) {
          const { lst } = payload;
          return {
            ...state,
            userList: lst,
          };
        }
      }
      break;
    case SPRINGBOARD_REMOVE_USER_SUCCESS:
      {
        const { typ } = payload;
        if (typ === Res.SUCCESS_OBJ) {
          const { obj } = payload;
          return {
            ...state,
            userList: state.userList.filter(user => user._id !== obj._id),
          };
        }
      }
      break;
      case SPRINGBOARD_NEW_USER_STATUS:
        return {
          ...state,
          newUserStatus: payload,
        };
    default:
      break;
  }
  return state;
};

export default springReducer;
