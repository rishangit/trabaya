import { ofType, combineEpics } from 'redux-observable';
import {
  SPRINGBOARD_ADD_USER_ATTEMPT,
  springBoardAddUserSuccess,
  SPRINGBOARD_LIST_USER_ATTEMPT,
  springBoardListUserSuccess,
  SPRINGBOARD_REMOVE_USER_ATTEMPT,
  springBoardRemoveUserSuccess,
} from './springBoard.action';
import { switchMap, map } from 'rxjs/operators';
import { httpPost } from '../../common/httpCall';

export const epicSpringboardAddUser = (action$, state$) => {
  return action$.pipe(
    ofType(SPRINGBOARD_ADD_USER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'add_spring',
        data: payload,
      }).pipe(map(result => springBoardAddUserSuccess(result.response))),
    ),
  );
};

export const epicSpringboardListUser = (action$, state$) => {
  return action$.pipe(
    ofType(SPRINGBOARD_LIST_USER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'list_spring',
        data: payload,
      }).pipe(map(result => springBoardListUserSuccess(result.response))),
    ),
  );
};

export const epicSpringboardRemoveUser = (action$, state$) => {
  return action$.pipe(
    ofType(SPRINGBOARD_REMOVE_USER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: 'remove_spring',
        data: payload,
      }).pipe(map(result => springBoardRemoveUserSuccess(result.response))),
    ),
  );
};

const springBoardEpic = combineEpics(
  epicSpringboardAddUser,
  epicSpringboardListUser,
  epicSpringboardRemoveUser,
);

export default springBoardEpic;
