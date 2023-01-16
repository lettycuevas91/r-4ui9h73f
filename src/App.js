import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.count = this.count.bind(this);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text"  onChange={this.count} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.count}</p>
      </div>
    );
  }
  count(e) {
    this.setState({
      count: e.target.value
    });
  }
}

export default App;
