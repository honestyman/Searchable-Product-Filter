import React from 'react';
import { ThemeContext } from './theme-context';

const ThemeTogglerButton = function() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <ThemeContext.Consumer>
            { ({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background }}
                >
                    Toggle Theme - {theme.background}
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton;