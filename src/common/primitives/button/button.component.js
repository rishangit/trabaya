import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';
import { BtnType } from './button.constants';

const ButtonComponent = props => {
  const { children, className, btn, ...other } = props;
  let btnFormatter = 'regular';
  switch (btn) {
    case BtnType.INVERTED:
      btnFormatter = 'inverted';
      break;
    default:
      btnFormatter = 'regular';
      break;
  }

  return (
    <button
      {...other}
      className={classNames(styles.button, styles[btnFormatter], className)}
    >
      {children}
    </button>
  );
};

export default React.memo(ButtonComponent);
