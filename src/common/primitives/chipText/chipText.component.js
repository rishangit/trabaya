import React, { useState } from 'react';
import styles from './chipText.module.scss';
import './chipText.scss';
import Chips, { Chip } from 'react-chips';
import classNames from 'classnames';
import { Icon, mdSize } from '../../icon';
import ReactTooltip from 'react-tooltip';

const ChipTextComponent = props => {
  const {
    suggestions,
    className,
    name,
    formProps: { errors, touched, values, setFieldValue, setFieldTouched },
    ...rest
  } = props;

  const [select, setValue] = useState([]);

  const handleOnBlur = e => {
    setFieldTouched(name);
    console.log('tuched')
  };
  const handleOnChange = val => {
    values[name] = val;
    setValue(val);
    setFieldValue(name, val);
    setFieldTouched(name);
  };

  return (
    <div
      onBlur={handleOnBlur}
      className={classNames(styles.chipWrapper, 'chip-wrp', className)}
    >
      <Chips
        className={styles.container}
        value={values[name]}
        onChange={handleOnChange}
        suggestions={suggestions}
        fromSuggestionsOnly={false}
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

export default React.memo(ChipTextComponent);
