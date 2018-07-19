import React from 'react';
import { MultipleContextApp } from './MultipleContextApp';

class MultipleContextParentApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MultipleContextApp signedInUser={{name: "Zain"}} theme="light" />
        );
    }
}

export default MultipleContextParentApp;