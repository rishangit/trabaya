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
import classNames from 'classnames';
import styles from './main.module.scss';
import Header from '../header';
import NavigationComponent from '../nanvigation';
import { ModalComponent } from '../modal';
import HomeComponent from '../../modules/home';
import CreateUserComponent from '../../modules/createUser';

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

  return (
    <div className={styles.mainWrp}>
      <BrowserRouter>
        <Header {...props} />
        <NavigationComponent {...props}/>
        <div
          className={classNames(
            styles.mainCon,
            !naviSetting.show && styles.hidden,
          )}
        >
          <Switch>
            {/* <Route exact path={"/projects"} component={ProjectComponent} /> */}
            <Route path={'/home'} component={HomeComponent} />
            <Route path={'/create_user'} component={CreateUserComponent} />

            <Redirect from={'/'} to={'/home'} />
          </Switch>
        </div>
        <ModalComponent />
      </BrowserRouter>
    </div>
  );
};

export default React.memo(MainComponent);
