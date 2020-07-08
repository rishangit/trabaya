import React from 'react';
import styles from './userInline.module.scss';
import classNames from 'classnames';

const UserInlineComponent = (props) => {
  const { user:{name, img} } = props;
  return (
    <div className={styles.userInlineWrp}>
      <div className={styles.userinlineImg}>
        <img src={img} />
      </div>
      <div className={classNames(styles.userInlineName, 'caption')}>{name} </div>
    </div>
  );
};

export default React.memo(UserInlineComponent);
