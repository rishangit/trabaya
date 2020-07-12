import React from 'react';
import Select from 'react-dropdown-select';
import styles from './multiselect.module.scss';
import classNames from 'classnames';

import { Icon, mdSize } from '../../icon';
import ReactTooltip from 'react-tooltip';

const MultiSelectComponent = props => {
  const {
    className,
    name,
    formProps: {
      errors,
      touched,
      values,
      setFieldValue,
      setFieldTouched
    },
    ...rest
  } = props;

  const handleOnDropdownClose = e=>{
    setFieldTouched(name);
  }
  const handelOnChange = val => {
    setFieldValue(name, val);
    setFieldTouched(name);
    values[name] = val;
  };
  return (
    <div className={classNames(styles.multiWrp, 'multiwrp')} >
      <Select
        multi
        className={styles.dorpWrp}
        onChange={handelOnChange}
        onDropdownClose={handleOnDropdownClose}
        {...rest}
      />
      <div className={styles.errorMsg} data-tip={`${errors[name]}`}>
        {touched[name] && errors[name] && (
          <Icon {...mdSize} icon={'error'} className={styles.icon} />
        )}
        <ReactTooltip />
      </div>
    </div>
  );
};

export default React.memo(MultiSelectComponent);
