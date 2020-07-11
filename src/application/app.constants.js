
export const modalSetting = {
  component: null,
  width: '400',
  height: '300',
  show: false,
  title: null,
};

export const deviceTypes = {
  DESKTOP:0,
  TAB:1,
  MOBILE:3
}

export const setTheme = ()=>{

  document.documentElement.style.setProperty('--theme-higlight-color', '#55aad4');
  document.documentElement.style.setProperty('--theme-button-color', '#55aad4');
  document.documentElement.style.setProperty('--theme-button-hover-color', '#3994c1');
  document.documentElement.style.setProperty('--theme-button-active-color', '#1d6f98');
  document.documentElement.style.setProperty('--theme-inverted-button-font-color', '#55aad4');
} 