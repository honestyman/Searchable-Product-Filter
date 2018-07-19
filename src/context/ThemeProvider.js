import React from 'react';

export const ThemeContext = React.createContext('light');

export class ThemeProvider extends React.Component {

    state = {
        theme: 'light'
    };

    toggleTheme = () => {
        this.setState( ({theme}) => ({
            theme: theme === 'light' ? 'dark' : 'light'
        }));
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                { this.props.children({toggleTheme: this.toggleTheme}) }
            </ThemeContext.Provider>
        );
    }
}

export const ThemeConsumer = ThemeContext.Consumer;