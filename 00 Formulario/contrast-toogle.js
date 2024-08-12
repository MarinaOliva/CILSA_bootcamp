document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-contrast');
    const themeStyle = document.getElementById('theme-style');

    toggleButton.addEventListener('click', () => {
        const currentTheme = themeStyle.getAttribute('href');
        if (currentTheme === 'style.css') {
            themeStyle.setAttribute('href', 'style-high-contrast.css');
            toggleButton.setAttribute('src', 'sun.png');
            toggleButton.setAttribute('alt', 'Modo bajo contraste');
            toggleButton.setAttribute('title', 'Modo bajo contraste');
        } else {
            themeStyle.setAttribute('href', 'style.css');
            toggleButton.setAttribute('src', 'moon.png');
            toggleButton.setAttribute('alt', 'Modo alto contraste');
            toggleButton.setAttribute('title', 'Modo alto contraste');
        }
    });
});
