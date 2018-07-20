import React from 'react';

const ThemeContext = React.createContext('light');

//This function takes a component
export function withTheme(Component) {
    //and returns another component
    return function ThemedComponent(props) {
        //and renders the wrapped component with the context theme
        //We can pass through additional props as well
        return (
            <ThemeContext.Consumer>
                { (theme) => (
                    <Component {...props} theme={theme}/>
                )}
            </ThemeContext.Consumer>
        );
    }
}