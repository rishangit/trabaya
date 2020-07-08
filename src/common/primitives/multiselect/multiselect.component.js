import React from 'react';
import Select from 'react-dropdown-select';
import styles from './multiselect.module.scss';
import './multiselect.scss';

const MultiSelectComponent = (props) => {
  const {
    className,
    name,
    // formProps: { errors, touched, values, handleBlur, handleChange },
    ...rest
  } = props;
  return (
    <div className={styles.multiWrp}>
      <Select
        multi
        className={styles.dorpWrp}
        {...rest}
      />
    </div>
  );
};

export default React.memo(MultiSelectComponent);
