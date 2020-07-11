import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './checkbox.module.scss';
import './checkbox.scss';

const CheckBoxComponent = props => {
  const { label, checked, onChange, onLabelClick } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(checked);

  const handleOnClick = e => {
    setCheckboxChecked(prev => !prev);
    if (onChange) onChange(checkboxChecked);
  };

  return (
    <div className={styles.checkWrp}>
      <label className={classNames('checkContainer')}>
        <input
          type="checkbox"
          checked={checkboxChecked ? true : null}
          onChange={e => handleOnClick(e)}
        />
        <span className="checkmark"></span>
      </label>
      <span
        className={classNames('caption small', styles.label)}
        onClick={onLabelClick}
      >
        {label}
      </span>
    </div>
  );
};

export default React.memo(CheckBoxComponent);
