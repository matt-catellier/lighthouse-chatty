import React, {Component} from 'react';

const Message = ({message}) =>
  <div style={{padding: 10, borderBottom: '1px solid black'}}>
    <span style={{fontWeight: 'bold'}}> {message.username}: </span> <span>{message.content}</span>
  </div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      message: '',
      messages: [
        {
          type: "incomingMessage",
          content: "I won't be impressed with technology until I can download food.",
          username: "Anonymous1"
        },
        {
          type: "incomingNotification",
          content: "Anonymous1 changed their name to nomnom",
        },
        {
          type: "incomingMessage",
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          username: "Anonymous2"
        },
        {
          type: "incomingMessage",
          content: "...",
          username: "nomnom"
        },
        {
          type: "incomingMessage",
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          username: "Anonymous2"
        },
        {
          type: "incomingMessage",
          content: "This isn't funny. You're not funny",
          username: "nomnom"
        },
        {
          type: "incomingNotification",
          content: "Anonymous2 changed their name to NotFunny",
        },
      ]
    }
  }

  setUser = e => { this.setState({user: e.target.value}) }
  setMessage = e => { this.setState({message: e.taget.value }) }

  componentDidMount() {
    var exampleSocket = new WebSocket("ws://localhost:3001")
  }

  render() {
    return (
      <div>
        <h1>Chatty 2</h1>
        <div>
          <div><span> User: </span><input onChange={this.setUser} /></div>
          <div><span> Message: </span><input onChange={this.setMessage} /></div>
        </div>
        <div>
          {this.state.messages.filter(m => m.type === 'incomingMessage').map((m,i) => <Message key={i} message={m}/>)}
        </div>

      </div>
    );
  }
}
export default App;
