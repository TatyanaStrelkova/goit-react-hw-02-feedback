import React, { Component } from "react";

export class App extends Component  {
/*   return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    </div>
  ); */

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  contGoodStates = () => this.setState((prevState) => { return {
    good: prevState.good + 1
  }})

  contNeutralStates = () => this.setState((prevState) => {})

  contBadStates = () => {}

  render() {
    return <div>
    <hi>Please leave feedback</hi>
    <button>Good</button>
    <button>Neutral</button>
    <button>Bad</button>
    <ul>Statistics</ul>
    <li>Good</li>
    <li>Neutral</li>
    <li>Bad</li>
    <li>Total</li>
    <li>Positive feedback</li>
    </div>
  }

};
