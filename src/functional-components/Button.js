import React from 'react';

export const BlueButton = (props) => {
    const styles = { background: 'blue', color: 'white' };

    return <button {...props} style={styles}>Functional Component Button</button>
}

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