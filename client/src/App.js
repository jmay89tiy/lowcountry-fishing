import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.state = {trip: ""};
  }

  textChangeHandler (event) {
    console.log(event.target.value);
    this.setState({trip: event.target.value});
  }

  saveHandler () {
    console.log(this.state);
    (async () => {
      const rawResponse = await fetch('http://localhost:3000/trip', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hot reloading to React</h1>
        </header>
        <p className="App-intro">
          <label htmlFor="trip-input">Trip</label>
          <input name="trip-input" type="text" onChange={this.textChangeHandler}/>
          <button onClick={this.saveHandler}>Save</button>
        </p>
      </div>
    );
  }
}

export default App;
