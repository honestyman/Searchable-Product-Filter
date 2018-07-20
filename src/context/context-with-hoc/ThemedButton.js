import React from 'react';
import { withTheme } from './WithThemeHOC';

function Button(theme, ...rest) {
    console.log('Themed Button ', theme);
    return (
        <button className={theme} {...rest}>Themed Button created from HOC - {}</button>
    );
}

const ThemedButton = withTheme(Button);

export default ThemedButton;