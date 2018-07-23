import React from 'react';
import MyPortalComponent from './MyPortalComponent';

class Tooltip extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.width = props.width || 256;
        this.space = props.space || 16;

        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
    }

    showTooltip() {
        /**
         * some maths to align the tooltip with whatever 
         * you just hovered over ( the 'target' )
         */
        const style = {
            width: this.width
        };
        const dimensions = this.el.getBoundingClientRect(); //where on the screen is the target

        //center align the tooltip by taking both the target and tooltip widths into account
        style.left = (dimensions.left + (dimensions.width / 2)) - (this.width / 2);
        style.left = Math.max(this.space, style.left); //make sure it does not poke off the left side of the page
        style.left = Math.min(style.left, document.body.clientWidth - this.width - this.space); //or off the right

        if( dimensions.top < window.innerHeight / 2 ) { //the top half of the page
            /**
             * when on the top half of the page, position the top 
             * of the tooltip just below the target 
             * it will stretch downwards
             */
            style.top = dimensions.top + dimensions.height + this.space;
        } else {
            /**
             * when on the bottom half, set the bottom of the tooltip
             * just above the top of the target
             * it will stretch upwards
             */
            style.bottom = ( window.innerHeight - dimensions.top) + this.space;
        }

        this.setState({
            visible: true,
            style
        });
    }

    hideTooltip() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <span // span so it is a valid HTML no matter where it is used
                onMouseOver={this.showTooltip}
                onMouseOut={this.hideTooltip}
                className="tooltip-trigger-text"
                ref={ el => this.el = el }
            >
                {this.props.children}

                {this.state.visible && (
                    <MyPortalComponent>
                        <div // this div is not actually a child of the span above. Magic portal
                            className="tooltip-body"
                            style={this.state.style}
                        >
                            {this.props.text}
                        </div>
                    </MyPortalComponent>
                )}
            </span>
        );
    }
}

export default Tooltip;