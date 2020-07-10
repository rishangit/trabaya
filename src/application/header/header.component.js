import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Icon, mdSize } from '../../common/icon';
import {appNaviSettingSet} from '../../application/app.action';
import {Search} from '../../common/primitives';

const Header = props => {
  const dispatch = useDispatch();
  const {authReducer:{session},
appReducer:{naviSetting}} = useSelector(state=>state);
  const history = useHistory();

  const handleMenuClick = e=>{
    dispatch(appNaviSettingSet({show:!naviSetting.show}));
  }


  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu} onClick={handleMenuClick}>
        <Icon {...mdSize} icon={'open-menu'} className={styles.icon} />
        </div>
        <div className={styles.search}><Search onSearch={()=>alert('search')}/></div>
        <div className={styles.rightWrapper}>
          <div className={styles.notification}>  <Icon {...mdSize} icon={'notification'} className={styles.icon} /></div>
          <div className={styles.user}>{session && session.firstName} </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
