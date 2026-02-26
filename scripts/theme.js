(() => {
  const THEME_KEY = 'theme';
  const LIGHT_THEME = 'light';
  const DARK_THEME = 'dark';
  const LIGHT_ICON = '\uD83C\uDF1E';
  const DARK_ICON = '\uD83C\uDF19';

  const applyTheme = (theme) => {
    const isLight = theme === LIGHT_THEME;
    document.body.classList.toggle('light-mode', isLight);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = isLight ? LIGHT_ICON : DARK_ICON;
    }
  };

  const storedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(storedTheme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME);

  window.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
      return;
    }

    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('light-mode') ? DARK_THEME : LIGHT_THEME;
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });
})();
