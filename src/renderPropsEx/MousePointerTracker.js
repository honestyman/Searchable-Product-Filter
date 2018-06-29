import React, { Component } from 'react';
//import MousePointerTracker from './MousePointerTracker';

/**
 * Render-Props Sample
 * render props refer to a simple technique for sharing code between React components
 * using a prop whose value is a function
 * 
 * A component using a render prop takes a function that returns a React element 
 * and calls it instead of implementing its own render logic
 * 
 * By using a prop to define what is rendered, the component just injects functionality 
 * without needing to know how it is being applied to the UI
 */

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    render() {
        let currentState = this.state;
        console.log('currentState : ', currentState);
        return (
            // passing the (x, y) coordinates to this.props.render() function
            <div style={{ height: '100%', border: '1px solid red' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(currentState)}
            </div>
        )
    }
}

export class MousePointerTracker extends React.Component {
    render() {
        console.log('MousePointerTracker component');
        return (
            <div style={{ height: '100%', border: '2px solid lightblue' }} >
                <Mouse render={ ({x, y}) => (
                    <h1>The mouse position is ( {x}, {y} )</h1>
                )}/>
            </div>
        )
    }
}

//export default MousePointerTracker;

export class AnotherMousePointerTracker extends React.Component {
    render() {
        return (            
            <Mouse render={ ({x,y}) => (
                <React.Fragment>
                    <p>This is another component using the Mouse component and render props</p>
                    <br/>
                    <p>The position of the mouse is <strong>( {x}, {y} )</strong></p>
                </React.Fragment>
            )}/>
    )
    }
}