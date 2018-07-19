import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

//An intermediate component that uses the ThemedButton
const Toolbar = function(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class ThemedAppWDContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark ? themes.light : themes.dark
            }));
        };
    }

    render() {
        /*
         * The ThemedButton button inside the ThemeProvider 
         * uses the theme from state while the one outside uses
         * the default dark theme
         */
        return (
            <div>
                <h4>Button with toggleTheme func</h4>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <br/>
                <br/>
                <hr/>
                <h4>Button without toggleTheme func and using default context value</h4>
                <ThemedButton />
            </div>
        );
    }
}

export default ThemedAppWDContext;