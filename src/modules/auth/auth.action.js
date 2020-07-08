export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginAttempt = payload => ({ type: LOGIN_ATTEMPT, payload });
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
export const logOut = payload => ({ type: LOGOUT, payload });

export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerAttempt = payload => ({ type: REGISTER_ATTEMPT, payload });
export const registerSuccess = payload => ({ type: REGISTER_SUCCESS, payload });

export const SET_USER = 'SET_USER';
export const setUser = payload => ({ type: SET_USER, payload });
