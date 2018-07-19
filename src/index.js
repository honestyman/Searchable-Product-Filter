import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './ProductDetails';
import Calculator from './TemperatureCalculator';
import {MousePointerTracker, AnotherMousePointerTracker } from './renderPropsEx/MousePointerTracker';
import ComponentNeedingStorage from './anotherRenderPropsEx/ComponentNeedingStorage';
import FileInput from './uncontrolled-components/FileInput';
import NameForm from './uncontrolled-components/NameForm';
import Username from './functional-components/Username';
import { BlueButton, ButtonWithEvent } from './functional-components/Button';
import TypingHistory from './pure-component/typing-history';
import registerServiceWorker from './registerServiceWorker';
import { CounterComponent, Counter } from './thirdRenderPropsEx/Counter';
import CounterExample from './higher-order-components/CounterHoC';
import AppSuperCompose from './context/AppSuperComposed';
import ThemeAppWithoutContext from './context/react-sample-1/ThemeApp';
import ThemedAppWithContext from './context/react-sample-using-context/ThemedAppWithContext';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <React.Fragment>
        <AppSuperCompose />
        <br/>
        <ThemeAppWithoutContext />
        <br/>
        <ThemedAppWithContext />
    </React.Fragment>,
    document.getElementById('root')
);

registerServiceWorker();
/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

/* Searchable Product Details Filter - Thinking in React
ReactDOM.render(
    <FilterableProductTable
        products={PRODUCTS}
    />, document.getElementById('root')
);
*/

/* Temperature Calculator - Lifting Up State
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)
*/

/* Render Props - Mouse Pointer Tracker and Storage examples
ReactDOM.render(
    <React.Fragment>
        <MousePointerTracker />
        <AnotherMousePointerTracker />
        <ComponentNeedingStorage />
    </React.Fragment>,
    document.getElementById('root')
);
*/

/* Uncontrolled Components example
ReactDOM.render(
    <React.Fragment>
        <NameForm />
        <br/>
        <FileInput />
    </React.Fragment>,
    document.getElementById('root')
);
*/

/* Functional Component example
ReactDOM.render(
    <React.Fragment>
        <Username username='Zain Pathan' />
        <BlueButton onClick={() => {
            alert('Blue Button clicked');
        }}/>
        <br/>
        <br/>
        <ButtonWithEvent name='Zain Pathan'/>
    </React.Fragment>,
    document.getElementById('root')
);
*/

/*
ReactDOM.render(
    <TypingHistory />,
    document.getElementById('root')
);
*/

/* Render Props Example
ReactDOM.render(
    //<ComponentNeedingStorage />
    <React.Fragment>
        <MousePointerTracker />
        <AnotherMousePointerTracker />
        <br/>
        <CounterComponent 
            render={ 
                props => {
                    return ( <Counter {...props} /> )
                }
            }
        />
    </React.Fragment>,
    document.getElementById('root')
);
*/

/* Higher Order Components Example
ReactDOM.render(
    <CounterExample />,
    document.getElementById('root')
);
*/