import React from 'react';

// https://medium.com/javascript-inside/render-props-render-callbacks-and-higher-order-components-are-all-interchangeable-1f01f56437fa
// https://codesandbox.io/s/vmr357j2z3?from-embed

export class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    update = type => {
        if( type === 'Inc' ) {
            this.setState( ({count}) => (
                {
                    count: count + 1
                }
            ));
        } else if( type === 'Dec' ) {
            this.setState( ({count}) => (
                {
                    count: count -1
                }
            ));
        }
    };

    render() {
        return this.props.render({
            ...this.state,
            ...this.props,
            update: this.update
        });
    }
}

export const Counter = ( {count, update} ) => {
    return(
        <div style={{ border: '1px solid lightblue' }}>
            <button onClick={ () => update('Inc') }>Inc</button>
            <br/>
            <p>Count : {count}</p>
            <br/>
            <button onClick={ () => update('Dec') }>Dec</button>
        </div>
    );    
};