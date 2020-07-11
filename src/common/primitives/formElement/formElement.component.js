import React, { useState, useEffect } from 'react';
import styles from './formElement.module.scss';
import { Icon, smSize } from '../../../common/icon';
import ClassNames from 'classnames';

const FormElementComponent = props => {
  const { icon, children, className } = props;
  const [hasIcon, setHasIcon] = useState(false);

  useEffect(() => {
    if (icon) {
      setHasIcon(true);
    }
  }, []);

  return (
    <div className={ClassNames(styles.formElement, className)}>
      {hasIcon && <Icon {...smSize} icon={icon} className={styles.icon} />}
      {children}
    </div>
  );
};

export default React.memo(FormElementComponent);
