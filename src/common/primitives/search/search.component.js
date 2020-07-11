import React, { useState } from 'react';
import styles from './search.module.scss';
import { Icon, mdSize } from '../../icon';
import { debounce } from 'rxjs/operators';

const SearchComponent = props => {
  const { onSearch, ...rest } = props;
  const [value, setValue] = useState();

  const handleSearchClick = e => {
    onSearch(value);
  };
  const handleOnChange = e => {
    setValue(e.target.value);
    debounce(onSearch(e.target.value), 1000);
  };
  return (
    <div className={styles.search}>
      <input
        type={'text'}
        className={styles.input}
        placeholder={'Search'}
        {...rest}
        onChange={handleOnChange}
      />
      <div className={styles.iconWrapper}>
        <Icon {...mdSize} icon={'search'} onClick={handleSearchClick} />
      </div>
    </div>
  );
};

export default React.memo(SearchComponent);
