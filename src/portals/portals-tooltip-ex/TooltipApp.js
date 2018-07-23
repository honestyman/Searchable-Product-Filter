import React from 'react';
import Tooltip from './Tooltip';

const TooltipApp = () => (
    <div>
        <p>
            Some text, some of which <Tooltip text="This is some more info about that 
            first thing you should find very interesting."> requires explanation</Tooltip>
            (Scroll down for more)
        </p>

        <div style={{ lineHeight: 10 }}>Scroll down</div>

        <p>
            <Tooltip text="You hovered over the second one!">Something else to hover over</Tooltip> is what this is.
        </p>

        <div style={{ lineHeight: 10 }}>Just more padding...</div>
    </div>
);

export default TooltipApp;