import React from 'react';
import ThemedButton from './ThemedButton';

class ContextWHOCApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ThemedButton />
                <br/>
                <hr/>
                <ThemedButton />
            </React.Fragment>
        )
    }
}

export default ContextWHOCApp;