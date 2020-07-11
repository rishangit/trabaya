export const themeItems = [
  {
    name: 'green',
    themeHiglightColor: '#51a94b',
    themeButtonColor: '#51a94b',
    themeButtonHhoverColor: '#33862d',
    themeButtonActiveColor: '#1d5e18',
    themeInvertedButtonFontColor: '#51a94b',
  },
  {
    name: 'blue',
    themeHiglightColor: '#55aad4',
    themeButtonColor: '#55aad4',
    themeButtonHhoverColor: '#3994c1',
    themeButtonActiveColor: '#1d6f98',
    themeInvertedButtonFontColor: '#55aad4',
  },
  {
    name: 'red',
    themeHiglightColor: '#ff6666',
    themeButtonColor: '#ff6666',
    themeButtonHhoverColor: '#ff3333',
    themeButtonActiveColor: '#ff0000',
    themeInvertedButtonFontColor: '#ff6666',
  },

  {
    name: 'pink',
    themeHiglightColor: '#cc33ff',
    themeButtonColor: '#cc33ff',
    themeButtonHhoverColor: '#bf00ff',
    themeButtonActiveColor: '#9900cc',
    themeInvertedButtonFontColor: '#cc33ff',
  },
];

export const loadTheme = theme => {
  if (!theme) {
    const strtheme = localStorage.getItem('theme');
    if(strtheme)
    theme = JSON.parse(strtheme);
    else
    return
  }

  document.documentElement.style.setProperty(
    '--theme-higlight-color',
    theme.themeHiglightColor,
  );
  document.documentElement.style.setProperty(
    '--theme-button-color',
    theme.themeButtonColor,
  );
  document.documentElement.style.setProperty(
    '--theme-button-hover-color',
    theme.themeButtonHhoverColor,
  );
  document.documentElement.style.setProperty(
    '--theme-button-active-color',
    theme.themeButtonActiveColor,
  );
  document.documentElement.style.setProperty(
    '--theme-inverted-button-font-color',
    theme.themeInvertedButtonFontColor,
  );
};
