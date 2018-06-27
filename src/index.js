import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './ProductDetails';
import Calculator from './TemperatureCalculator';
import {MousePointerTracker, AnotherMousePointerTracker } from './MousePointerTracker';
import ComponentNeedingStorage from './anotherRenderPropsEx/ComponentNeedingStorage';
import FileInput from './uncontrolled-components/FileInput';
import NameForm from './uncontrolled-components/NameForm';
import registerServiceWorker from './registerServiceWorker';


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
        <NameForm />
        <br/>
        <FileInput />
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