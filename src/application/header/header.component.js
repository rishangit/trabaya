import React, { useState } from 'react';
import styles from './header.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { Icon, mdSize } from '../../common/icon';
import { appNaviSettingSet, appSearchSet } from '../../application/app.action';
import { Search } from '../../common/primitives';

const Header = props => {
  const dispatch = useDispatch();
  const [debounce, setDebounce] = useState(null);
  const {
    authReducer: { session },
    appReducer: { naviSetting },
    springReducer: { userList },
  } = useSelector(state => state);

  const handleMenuClick = e => {
    dispatch(appNaviSettingSet({ show: !naviSetting.show }));
  };

  const handleSearch = val => {
    debounce && clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        dispatch(appSearchSet(val));
      }, 1000),
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu} onClick={handleMenuClick}>
          <Icon {...mdSize} icon={'open-menu'} className={styles.icon} />
        </div>
        <div className={styles.search}>
          <Search onSearch={val => handleSearch(val)} />
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.notification}>
            <Icon {...mdSize} icon={'notification'} className={styles.icon} />
            <div className={styles.count}>{userList && userList.length}</div>
          </div>
          <div className={styles.user}>{session && session.firstName} </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
