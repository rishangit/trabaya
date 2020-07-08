import React from 'react';
import styles from './title.module.scss';
import classNames from 'classnames';

const TitleComponent = (props) => {
  const { children, size, className } = props;
  switch (size) {
    case 'h1':
      return (
        <h1 className={classNames(styles.title, className)}>{children}</h1>
      );
    default:
      return (
        <h1 className={classNames(styles.title, className)}>{children}</h1>
      );
  }
};

export default React.memo(TitleComponent);
