import React from 'react';
import { ThemeContext } from './theme-context';

const ThemedButton = function(props) {
    return (
        <ThemeContext.Consumer>
            { (theme) => (
                <button 
                    {...props}
                    style={{ backgroundColor: theme.background }}
                >Themed Button</button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;