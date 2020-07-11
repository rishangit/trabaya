import { combineEpics } from 'redux-observable';
import authEpic from '../modules/auth/auth.epic';
import springBoardEpic from '../modules/springBoard/springBoard.epic'


const rootEpic = combineEpics(
  authEpic,
  springBoardEpic,
);

export default rootEpic;
