import React from 'react';
import classNames from 'classnames';
import styles from './textarea.module.scss';

const TextAreaComponent = (props) => {
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
      <textarea
        {...rest}
        value={values[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        id={name}
        className={styles.textBox}
      ></textarea>
      <p className={classNames(styles.errorMsg,'caption small')}>{touched[name] && errors[name] ? errors[name] : ''}</p>
    </div>
  );
};

export default React.memo(TextAreaComponent);
