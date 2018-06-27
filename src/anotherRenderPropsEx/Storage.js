import React from 'react';

class Storage extends React.Component {
    state = {
        localStorageAvailable: false
    };

    componentDidMount() {
        this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
        const testKey = 'test';

        try {
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
        } catch(e) {
            this.setState({
                localStorageAvailable: false
            });
        }
    }

    load = (key) => {
        if( this.state.localStorageAvailable ) {
            return localStorage.getItem(key);
        }
        return null;
    }

    save = (key, data) => {
        if( this.state.localStorageAvailable ) {
            localStorage.setItem(key, data);
        }
    }

    remove = (key) => {
        if( this.state.localStorageAvailable ) {
            localStorage.removeItem(key);
        }
    }

    render() {
        let obj = {
            load: this.load,
            save: this.save,
            remove: this.remove
        }
        return (
            <span>
                this.props.render({obj})
            </span>
        );
    }
}

export default Storage;