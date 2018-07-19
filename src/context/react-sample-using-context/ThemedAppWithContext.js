import React from 'react';

/* https://reactjs.org/docs/context.html */

// Context let us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with 'light' as the default)

const ThemeContext = React.createContext('light');

class ThemedAppWithContext extends React.Component {
    render() {
        /**
         * Use a Provider to pass the current theme to the tree below
         * Any component can read it, no matter how deep it is
         * In this example, we are passing 'dark' as the current value
         */
        return (
            <ThemeContext.Provider >
                <Toolbar value="dark"/>
            </ThemeContext.Provider>
        );
    }
}

/*
 * A component in the middle which does not have to pass 
 * the theme down explicitly anymore
 */
const Toolbar = function(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

const ThemedButton = function(props) {
    /*
     * Use a Consumer to read the current theme context.
     * React will find the closest theme Provider above and use its value
     * In this example, the current theme is 'dark' 
     */
    return (
        <ThemeContext.Consumer>
            { (theme) => (
                <button>Context theme value is - {theme}</button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedAppWithContext;