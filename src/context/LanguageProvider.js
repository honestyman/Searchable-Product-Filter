import React from 'react';

export const LanguageContext = React.createContext('en');

export class LanguageProvider extends React.Component {

    state = {
        lang: 'en'
    };

    setLanguage = (lang) => {
        this.setState({lang});
    }

    render() {
        return (
            <LanguageContext.Provider value={this.state.lang}>
                { this.props.children({setLanguage: this.setLanguage}) }
            </LanguageContext.Provider>
        );
    }
}

export const LanguageConsumer = LanguageContext.Consumer;