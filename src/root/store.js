import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import { createEpicMiddleware } from "redux-observable";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootEpic from "./root.epic";

const epicMiddleWare = createEpicMiddleware();
const enhanceDevTools = composeWithDevTools({})
const configStore = () => {
  const store = createStore(rootReducer,
    enhanceDevTools(
      applyMiddleware(epicMiddleWare)));

      epicMiddleWare.run(rootEpic)

  return store;
};

export default configStore;
