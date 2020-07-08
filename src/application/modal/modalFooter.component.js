import React from 'react';
import styles from './modal.module.scss';

const ModalFooterComponent = (props) => {
  const { children } = props;
  return (
    <div className={styles.btnWrp}>
      <div className={styles.btnCon}>{children}</div>
    </div>
  );
};

export default React.memo(ModalFooterComponent);
