import { ofType, combineEpics } from "redux-observable";
import {
  LOGIN_ATTEMPT,
  loginSuccess,
  REGISTER_ATTEMPT,
  registerSuccess
} from "./auth.action";
import { switchMap, map } from "rxjs/operators";
import { httpPost } from "../../common/httpCall";

export const epicLogin = (action$, state$) => {
  return action$.pipe(
    ofType(LOGIN_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "login_user",
        data: payload
      }).pipe(
        map(result => loginSuccess(result.response)))
    )
  );
};

export const epicRegister = (action$, state$) => {
  return action$.pipe(
    ofType(REGISTER_ATTEMPT),
    switchMap(({ payload }) =>
      httpPost({
        call: "add_user",
        data: payload
      }).pipe(map(result => registerSuccess(result.response)))
    )
  );
};

const authEpic = combineEpics(epicLogin, epicRegister);

export default authEpic;
