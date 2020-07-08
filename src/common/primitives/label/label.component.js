import React from 'react';
import styles from './label.module.scss';

const LabelComponent = (props) => {
  const { children } = props;
  return <div className={styles.labelCon}>{children}</div>;
};

export default React.memo(LabelComponent);
