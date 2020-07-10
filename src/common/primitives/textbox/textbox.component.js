import React from 'react';
import classNames from 'classnames';
import styles from './textbox.module.scss';

const TextBoxcomponent = (props) => {
  const {
    className,
    name,
    formProps: { errors, touched ,values,handleBlur ,handleChange},
    ...rest
  } = props;
  return (
    <div
      className={classNames(
        styles.textBoxWrp,
        className,
        touched[name] ? (errors[name] ? styles.error : '') : ''
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
      <div className={classNames(styles.errorMsg,'caption small')}>{touched[name] && errors[name] ? errors[name] : ''}</div>
    </div>
  );
};

export default React.memo(TextBoxcomponent);
