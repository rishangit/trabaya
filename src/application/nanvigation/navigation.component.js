import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './navigation.module.scss';
import { naviMenu } from './navigation.constants';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../../modules/auth/auth.action';
import { Icon, mdSize } from '../../common/icon';

const NavigationComponent = props => {
  const dispatch = useDispatch();
  const [pathname, setPathName] = useState(props.location.pathname);
  const [rootName, setRootName] = useState('');

  const history = useHistory();

  history.listen((location, action) => {
    setPathName(location.pathname);
  });

  const {
    appReducer: { naviSetting },
  } = useSelector(state => state);

  useEffect(() => {
    const paths = pathname.split('/');
    setRootName(paths[1]);
  }, [pathname]);

  const handleMenuFunction = (e, type) => {
    switch (type) {
      case 'logout':
        dispatch(logOut());
        history.push('/login');
        break;

      default:
        break;
    }
  };
  return (
    <div
      className={classNames(
        styles.navigation,
        !naviSetting.show && styles.hidden,
      )}
    >
      <ul className={styles.container}>
        {naviMenu.map(navi =>
          navi.url ? (
            <Link key={navi.id} to={navi.url}>
              <li
                className={classNames(
                  styles.naviRow,
                  navi.id === rootName && styles.active,
                )}
              >
                <Icon {...mdSize} icon={navi.icon} className={styles.icon} />
                <div className={styles.label}>{navi.label}</div>
              </li>
            </Link>
          ) : (
            <li
              key={navi.id}
              className={styles.naviRow}
              onClick={e => {
                handleMenuFunction(e, navi.type);
              }}
            >
              <Icon {...mdSize} icon={navi.icon} className={styles.icon} />
              <div className={styles.label}>{navi.label}</div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default React.memo(NavigationComponent);
