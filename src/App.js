import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubNubReact from 'pubnub-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-01024171-274e-4bc1-9082-a4a70ad4e6f0',
      subscribeKey: 'sub-c-a67bca1c-2ff0-11e9-b681-be2e977db94e'
    });

    this.pubnub.init(this);


    this.state = {
      headerText: "hello world",
      clickCount: 0,
      isBulbOn: true
    }
  }

  // componentWillMount() {
  //   this.pubnub.subscribe({
  //     channels: ['Default'],
  //     withPresence: true
  //   });

  //   this.pubnub.getMessage('Default', (msg) => {
  //     console.log(msg);
  //   });

  //   this.pubnub.getStatus((st) => {
  //     this.pubnub.publish({
  //       message: 'hello world from react',
  //       channel: 'Default'
  //     });
  //   });
  // }

  render() {
    console.log("hello world");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.headerText + ':' + this.state.clickCount}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yo B
          </a>
          <Button
            onClick={() => {
              console.log("Buttone Pressed")
              this.setState({
                clickCount: this.state.clickCount + 1,
              })
            }}
            variant="contained"
            color="primary">
            "Press ME!"
           </Button>
        </header>
      </div>
    );
  }
}

export default App;
