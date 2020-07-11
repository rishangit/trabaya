import React from 'react';
import styles from './springItem.module.scss';
import image from './image.png';
import { Icon, mdSize } from '../../../../common/icon';

const SpringItem = props => {
  const { user, onRemove } = props;

  return (
    <div className={styles.springItem}>
      <div className={styles.header}>
        <div className={styles.firstName}>{user.firstName}</div>
        <div className={styles.lastName}>{user.lastName}</div>
        <Icon {...mdSize} icon={'delete'} className={styles.icon} onClick={(e)=>{onRemove(e,user)}} />
      </div>
      <div className={styles.imageContainer}>
        <img alt={user.firstName} className={styles.image} src={image} />
      </div>
    </div>
  );
};

export default React.memo(SpringItem);
