import React from 'react';
import PropTypes from 'prop-types';

export const BlueButton = (props) => {
    const styles = { background: 'blue', color: 'white' };
    console.log('props.username : ', props.username);

    return <button {...props} style={styles}>Functional Component Button</button>
}

BlueButton.propTypes = {
    username: PropTypes.string.isRequired
};

BlueButton.defaultProps = {
    username: 'Zain'
};

const funcBtnClickHandler = (...options) => (e) => {
    console.log('event : ', e);
    console.log('options : ', options);

    alert('The button was clicked by '+options[0].name+' *-* '+e.target.name);
}

export const ButtonWithEvent = (props) => {
    return (
        <button 
            onClick={funcBtnClickHandler(props, 'useless-param')}
            name='ButtonWithEventHandler'
        >Functional Component Button with Event Handler</button>
    )
}

ButtonWithEvent.propTypes = {
    name: PropTypes.string.isRequired
};

ButtonWithEvent.defaultProps = {
    name: 'Zain'
};