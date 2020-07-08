import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './checkbox.module.scss';
import './checkbox.scss';
import { CheckType, CheckColor } from './checkbox.constants';

const CheckBoxComponent = (props) => {
  const {
    label,
    checked,
    checkType = CheckType.BLUE,
    onChange,
    onLabelClick,
  } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(checked);

  const handleOnClick = (e) => {
    setCheckboxChecked((prev) => !prev);
    if (onChange) onChange(checkboxChecked);
  };
  let checkColor = null;
  switch (checkType) {
    case CheckType.BLUE:
      checkColor = styles.checkBlue;
      break;
    case CheckType.GREEN:
      checkColor = styles.checkGreen;
      break;
    default:
      checkColor = styles.checkBlue;
      break;
  }

  return (
    <div className={styles.checkWrp}>
      <label
        className={classNames('checkContainer', checkColor)}
        style={{ backgroundColor: `${CheckColor[checkType]}` }}
      >
        <input
          type='checkbox'
          checked={checkboxChecked ? true : null}
          onChange={(e) => handleOnClick(e)}
        />
        <span className='checkmark'></span>
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
