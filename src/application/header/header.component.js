import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import { headerMenu } from './header.constant';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { logOut } from '../../modules/auth/auth.action';
import { Icon, lgSize } from '../../common/icon';


const Header = (props) => {
  const [pathname, setPathName] = useState(props.location.pathname);
  const [rootName, setRootName] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  history.listen((location, action) => {
    setPathName(location.pathname);
  });

  const handleLogoutClick = (e) => {
    dispatch(logOut());
    history.push('/login');
  };

  const handleConversationsClick = (e) => {
    history.push('/conversations');
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setRootName(paths[1]);
  }, [pathname]);

  return (
    <div className={styles.headerWrp}>
      <div className={styles.headerCon}>
        <ul className={styles.menuWrp}>
          {headerMenu.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className={classNames(
                styles.menuItem,
                menu.path.substr(1) === rootName && styles.active
              )}
            >
              {menu.text}
            </Link>
          ))}
        </ul>
        <div className={styles.loggedUserWrp}>
          <div className={styles.loggedUserCon}>
            <Icon
              {...lgSize}
              icon={'icn-chat'}
              className={styles.icon}
              onClick={(e) => {
                handleConversationsClick(e);
              }}
            />
            <Icon
              {...lgSize}
              icon={'icn-profile'}
              className={styles.icon}
              onClick={(e) => {
                handleLogoutClick(e);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
