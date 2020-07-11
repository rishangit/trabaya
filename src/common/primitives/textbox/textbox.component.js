import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './textbox.module.scss';
import { Icon, mdSize } from '../../icon';
import ReactTooltip from "react-tooltip";

const TextBoxcomponent = props => {
  const {
    className,
    name,
    formProps: { errors, touched, values, handleBlur, handleChange },
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        styles.textBoxWrp,
        className,
        touched[name] ? (errors[name] ? styles.error : '') : '',
      )}
    >
      <input
        {...rest}
        value={values[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        id={name}
        className={styles.textBox}
      />

      <div className={styles.errorMsg} data-tip={`${errors[name]}`}>
        {touched[name] && errors[name] && (
          <Icon {...mdSize} icon={'error'} className={styles.icon}  />
        )}
        <ReactTooltip />
      </div>
    </div>
  );
};

export default React.memo(TextBoxcomponent);
