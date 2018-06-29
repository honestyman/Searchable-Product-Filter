import React from 'react';

const withCounter = Component =>
    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        update = type => {
            if( type === 'Inc' ) {
                this.setState( ({count}) => ({count: count + 1}) );
            } else if( type === 'Dec' ) {
                this.setState( ({count}) => ( {count: count - 1}) );
            }
        };

        // <React.Fragment>
        //     <h2>Higher Order Component</h2>
        //     <h3>Content inside the Higher Order component</h3>
        //     <Component {...this.state} {...this.props} update={this.update} />
        //     <h3>Content below the Higher Order component call</h3>
        // </React.Fragment>

        // <div>
        //     <h2>Higher Order Component</h2>
        //     <Component {...this.state} {...this.props} update={this.update} />
        //     <h3>Content below the Higher Order Component call</h3>
        // </div>


        render() {
            return( // {...this.props} 
                <React.Fragment>
                    <h2>Higher Order Component</h2>
                    <h3>Content inside the Higher Order component</h3>
                    <Component {...this.state} update={this.update} />
                    <h3>Content below the Higher Order component call</h3>
                </React.Fragment>
            );
        }
    };

const Counter = ( {count, update} ) => (
    <div>
        <button onClick={ () => update('Inc') }>Inc</button>
        <br/>
        <p>Count : {count}</p>
        <br/>
        <button onClick={ () => update('Dec') }>Dec</button>
    </div>
);
const CounterExample = withCounter(Counter);

export default CounterExample;