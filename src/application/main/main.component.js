import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  useHistory,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../modules/auth/auth.action';
import { deviceTypes ,setTheme} from '../app.constants';
import { appDeviceSettingSet, appNaviSettingSet } from '../app.action';
import classNames from 'classnames';
import styles from './main.module.scss';
import Header from '../header';
import NavigationComponent from '../nanvigation';
import { ModalComponent } from '../modal';
import { CreateUser, SpringDash } from '../../modules/springBoard';
import ThemeComponent from '../../modules/theme';

const MainComponent = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    authReducer: { session },
    appReducer: { naviSetting },
  } = useSelector(state => state);

  useEffect(() => {
    if (!session) {
      const user = localStorage.getItem('session');
      if (user) dispatch(setUser(JSON.parse(user)));
      else {
        history.push('/login');
      }
    }
  }, [session]);

  useEffect(() => {
    let type = deviceTypes.DESKTOP;
    if (window.innerWidth < 576) {
      type = deviceTypes.MOBILE;
      dispatch(appNaviSettingSet({ show: false }));
    }   
    dispatch(appDeviceSettingSet({ type }));
  }, [window.innerWidth]);

  return (
    <div className={styles.mainWrapper}>
      <BrowserRouter>
        <Header {...props} />
        <NavigationComponent {...props} />
        <div
          className={classNames(
            styles.container,
            !naviSetting.show && styles.hidden,
          )}
        >
          <Switch>
            {/* <Route exact path={"/projects"} component={ProjectComponent} /> */}
            <Route path={'/home'} component={SpringDash} />
            <Route path={'/create_user'} component={CreateUser} />
            <Route path={'/theme'} component={ThemeComponent}/>
            <Redirect from={'/'} to={'/home'} />
          </Switch>
        </div>
        {/* <ModalComponent /> */}
      </BrowserRouter>
    </div>
  );
};

export default React.memo(MainComponent);
