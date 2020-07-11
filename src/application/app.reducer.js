import {
  APP_MODEL_SETTING_SET,
  APP_NAVI_SETTING_SET,
  APP_DEVICE_SETTING_SET,
  APP_SEARCH_SET,
} from './app.action';
import { modalSetting, deviceTypes } from './app.constants';

const initState = {
  modalSetting,
  search: '',
  naviSetting: {
    show: true,
  },
  device: {
    type: deviceTypes.DESKTOP,
  },
};

const appReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case APP_MODEL_SETTING_SET:
      return { ...state, modalSetting: payload };
    case APP_NAVI_SETTING_SET:
      return { ...state, naviSetting: { ...state.naviSetting, ...payload } };
    case APP_DEVICE_SETTING_SET:
      return { ...state, device: { ...state.device, ...payload } };
    case APP_SEARCH_SET:
      return { ...state, search: payload };
    default:
      return state;
  }
};

export default appReducer;
