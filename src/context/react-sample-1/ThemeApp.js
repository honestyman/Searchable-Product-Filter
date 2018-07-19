import React from 'react';

/* https://reactjs.org/docs/context.html */

class ThemeAppWithoutContext extends React.Component {
    render() {
        return (
            <Toolbar theme="red" />
        );
    }
}

const Toolbar = function(props) {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        <div>
            <ThemedButton theme={props.theme}/>
        </div>
    );
}

const ThemedButton = function(props) {
    let theme = props.theme;
    return (
        <button style={{
            color: {theme}
        }}>Background Colour from parent props - {theme}</button>
    );
}

export default ThemeAppWithoutContext;