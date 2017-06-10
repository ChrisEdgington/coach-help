import React, { Component } from 'react';
import { PageHeader, Button, Image } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasCreateBeenClicked: false
    };
    this.handleClickCreate = this.handleClickCreate.bind(this);
  }

  handleClickCreate() {
    this.setState((prevState, props) => ({
        hasCreateBeenClicked: !prevState.hasCreateBeenClicked
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <PageHeader>Coaches Helper</PageHeader>
        </div>
        <p className="App-intro">
            Create, share, and view a timer.<br />
        </p>
          <Button bsStyle={this.state.hasCreateBeenClicked ? "default" : "success"} bsSize="large" onClick={this.handleClickCreate}>
              Create a New Timer
          </Button>
      </div>
    );
  }
}

export default App;
