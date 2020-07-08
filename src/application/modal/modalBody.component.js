import React from 'react';
import styles from './modal.module.scss';

const ModalBodyComponent = (props) => {
  const { children } = props;
  return <div className={styles.modalBody}>{children}</div>;
};

export default React.memo(ModalBodyComponent);