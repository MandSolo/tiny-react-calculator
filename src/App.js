import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  state = {
    input: ""
  };

  ConcatInput = value => {
    this.setState({ input: this.state.input + value });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.ConcatInput}>7</Button>
            <Button handleClick={this.ConcatInput}>8</Button>
            <Button handleClick={this.ConcatInput}>9</Button>
            <Button handleClick={this.ConcatInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.ConcatInput}>4</Button>
            <Button handleClick={this.ConcatInput}>5</Button>
            <Button handleClick={this.ConcatInput}>6</Button>
            <Button handleClick={this.ConcatInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.ConcatInput}>1</Button>
            <Button handleClick={this.ConcatInput}>2</Button>
            <Button handleClick={this.ConcatInput}>3</Button>
            <Button handleClick={this.ConcatInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.ConcatInput}>0</Button>
            <Button handleClick={this.ConcatInput}>.</Button>
            <Button handleClick={this.ConcatInput}>=</Button>
            <Button handleClick={this.ConcatInput}>+</Button>
          </div>
          <div>
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
