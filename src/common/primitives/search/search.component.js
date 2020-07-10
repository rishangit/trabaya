import React from 'react';
import styles from './search.module.scss';
import { Icon, mdSize } from '../../icon';


const SearchComponent = props => {
  const {onSearch, ...rest} = props;

  return (
    <div className={styles.search}>
      <input type={'text'} className={styles.input} placeholder={'Search'} {...rest} />
      <div className={styles.iconWrapper}> <Icon {...mdSize} icon={'search'} onClick={onSearch && onSearch}/></div>
     
    </div>
  );
};

export default React.memo(SearchComponent);
