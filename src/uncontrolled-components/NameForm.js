import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRefName = React.createRef(); //TODO check older method of doing things
    }

    handleSubmit(e) {
        console.log('inputRefName : ', this.inputRefName);
        alert('Name submitted was : '+this.inputRefName.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name : 
                    <input
                        type="text"
                        ref={this.inputRefName}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NameForm;