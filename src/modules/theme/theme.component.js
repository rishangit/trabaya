import React from 'react';
import styles from './theme.module.scss';
import { themeItems, loadTheme } from './theme.const';

const ThemeComponent = props => {

  const handleThemeClick = (theme)=>{
    localStorage.setItem('theme', JSON.stringify(theme));
    loadTheme(theme)
  }

  return (
    <div className={styles.themeWrapper}>
      <div className={styles.container}>
        {themeItems.map(theme => (
          <div
            className={styles.themeItems}
            style={{ backgroundColor: `${theme.themeHiglightColor}` }}
            onClick={()=>handleThemeClick(theme)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ThemeComponent);
