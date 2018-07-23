import React from 'react';
import ModalComponent from './ModalComponent';
import './ParentComponent.css';

const appRoot = document.getElementById('app-root');

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /**
         * This will fire when the button in child is clicked
         * updating the ParentComponent's state, even though
         * button is not direct descendant in DOM
         */
        this.setState( (prevState) => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button 
                    is not a child of the div 
                    with the onClick handler
                </p>
                <ModalComponent>
                    <Child/>
                </ModalComponent>
            </div>
        );
    }
}

function Child() {
    /**
     * The click event on this button will bubble up to the parent
     * because there is not 'onClick' attribute defined
     */
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
};

export default ParentComponent;