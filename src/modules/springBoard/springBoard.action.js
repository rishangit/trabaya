
export const SPRINGBOARD_ADD_USER_ATTEMPT = 'SPRINGBOARD_ADD_USER_ATTEMPT';
export const springBoardAddUser = payload => ({ type: SPRINGBOARD_ADD_USER_ATTEMPT, payload });
export const SPRINGBOARD_ADD_USER_SUCCESS = 'SPRINGBOARD_ADD_USER_SUCCESS';
export const springBoardAddUserSuccess = payload => ({ type: SPRINGBOARD_ADD_USER_SUCCESS, payload });

export const SPRINGBOARD_NEW_USER_STATUS = 'SPRINGBOARD_NEW_USER_STATUS';
export const springBoardNewUserStatus = payload => ({ type: SPRINGBOARD_NEW_USER_STATUS, payload });


export const SPRINGBOARD_LIST_USER_ATTEMPT = 'SPRINGBOARD_LIST_USER_ATTEMPT';
export const springBoardListUser = payload => ({ type: SPRINGBOARD_LIST_USER_ATTEMPT, payload });
export const SPRINGBOARD_LIST_USER_SUCCESS = 'SPRINGBOARD_LIST_USER_SUCCESS';
export const springBoardListUserSuccess = payload => ({ type: SPRINGBOARD_LIST_USER_SUCCESS, payload });

export const SPRINGBOARD_REMOVE_USER_ATTEMPT = 'SPRINGBOARD_REMOVE_USER_ATTEMPT';
export const springBoardRemoveUser = payload => ({ type: SPRINGBOARD_REMOVE_USER_ATTEMPT, payload });
export const SPRINGBOARD_REMOVE_USER_SUCCESS = 'SPRINGBOARD_REMOVE_USER_SUCCESS';
export const springBoardRemoveUserSuccess = payload => ({ type: SPRINGBOARD_REMOVE_USER_SUCCESS, payload });