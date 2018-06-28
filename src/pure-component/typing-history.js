import React, {Component} from 'react';

class TypingHistoryComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }

        this._getLastMessage = this._getLastMessage.bind(this);
        this._onMessageChange = this ._onMessageChange.bind(this);
    }

    _getLastMessage() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        return lastMessage === undefined ? "" : lastMessage;
    }

    _onMessageChange(event) {
        const messages = [...this.state.messages];
        messages.push(event.target.value);
        this.setState({
            messages
        });
    }

    render() {
        return(
            <div className="TypingHistory">
                <input 
                    type="text"
                    value={this._getLastMessage()}
                    onChange={this._onMessageChange}
                    style={{ margin: "10px"}}
                />
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

class MessageList extends React.Component {
    render() {
        //<Message key={i} message={m} /> )}
        //<MessageWithShouldComponentUpdateMethod key={i} message={m}/>
        return (
            <ul>
                {this.props.messages.map((m, i) => <MessagePureComponent key={i} message={m}/>)}                
            </ul>
        );
    }
}

class Message extends Component {
    render() {
        return (
            <li style={{ margin: "10px" }}> {this.props.message} </li>
        )
    }
}

class MessageWithShouldComponentUpdateMethod extends Component {

    shouldComponentUpdate(nextProps) {
        if( this.props.message === nextProps.message ) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <li style={{ margin: "10px" }}> {this.props.message} </li>
        );
    }
}

class MessagePureComponent extends React.PureComponent {
    render() {
        return (
            <li style={{ margin: "10px" }}> { this.props.message} </li>
        );
    }    
}

export default TypingHistoryComponent;