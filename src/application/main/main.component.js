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
import HomeComponent from '../../modules/home';

import styles from './main.module.scss';
import Header from '../header';
import { ModalComponent } from '../modal';

const MainComponent = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    authReducer: { session },
  } = useSelector((state) => state);
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
        <div className={styles.mainCon}>
          <Switch>
            {/* <Route exact path={"/projects"} component={ProjectComponent} /> */}
            <Route path={'/home'} component={HomeComponent} />
            <Redirect from={'/'} to={'/home'} />
          </Switch>
        </div>
        <ModalComponent />
      </BrowserRouter>
    </div>
  );
};

export default React.memo(MainComponent);
