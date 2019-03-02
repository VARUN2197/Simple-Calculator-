import React, { Component } from 'react';
import Result from './Result';
import Board from './Board';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result : ""
    }
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(button) {
        if(button === "="){
            this.calculate();
        }
        else if(button === "C"){
            this.reset();
        }
        else if(button === "CE"){
            this.backspace();
        }
        else {
            this.setState({
                result: this.state.result + button
            });
        }
  }
  
  calculate() {
    try {
      this.setState({
        result : (eval(this.state.result) || "") + ""
      });  
    }
    catch(e) {
      this.setState({
        result: "error"
      });
    }
  }
  
  reset() {
    this.setState({
      result : ""
    });
  }
  
  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1> Calculator </h1>
        <Result result={this.state.result}/>
        <Board onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
