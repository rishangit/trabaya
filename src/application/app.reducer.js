import { APP_MODEL_SETTING_SET, APP_NAVI_SETTING_SET } from './app.action';
import { modalSetting } from './app.constants';

const initState = {
  modalSetting,
  naviSetting: {
    show: true,
  },
};

const appReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case APP_MODEL_SETTING_SET:
      return { ...state, modalSetting: payload };
    case APP_NAVI_SETTING_SET:
      return { ...state, naviSetting: { ...state.naviSetting, ...payload } };
    default:
      return state;
  }
};

export default appReducer;
