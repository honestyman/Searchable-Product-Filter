import React, {Component} from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * It returns an empty string on an invalid temperature, 
 * and it keeps the output rounded to the third decimal place
 */
function tryConvert(temperature, convertFunc) {
    const input = parseFloat(temperature); //parsing the string input as float
    if( Number.isNaN(input) ) {
        return ''; //returning empty string if temperature input is Not a Number
    }
    const output = convertFunc(input);
    const roundedOutput = Math.round(output * 1000 ) / 1000; //TODO check why this - reason above
    return roundedOutput.toString();
}

/**
 * function BoilingVerdict is a Functional Stateless Component
 */
const BoilingVerdict = (props) => {
    console.log('BoilingVerdict celcius : ', props.celsius);
    if( props.celsius >= 100 ) {
        return (
            <p>The water will boil</p>
        )
    }
    return (
        <p>The water will not boil</p>
    )
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        props.propObj.temp = 150;
        console.log('props : ', props);
        props.propsArr.push(10);
        console.log('props : ', props);
    }

    handleChange(e) {
        console.log('Temperature Input handleChange : ', e.target.value);
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        console.log('temperature : ', temperature);
        console.log('scale : ', scale);
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = ( scale === 'f' ? tryConvert(temperature, toCelsius) : temperature );
        const fahrenheit = ( scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature );


        const propObj = {
            name: 'Calculator',
            property: 'Provide details',
            temp: 100
        };

        const propsArr = [1, 2, 3];
        return(
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                    propObj={propObj}
                    propsArr={propsArr}
                />
                <TemperatureInput 
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                    propObj={propObj}
                    propsArr={propsArr}
                />
                <BoilingVerdict 
                    celsius={parseFloat(celsius)} //TODO check why this - celsius returned in string format
                />
            </div>
        )
    }
}

export default Calculator;