import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ACButton from "./components/ACButton";
import CButton from "./components/CButton";
import TopRowButton from "./components/TopRowButton";
import Header from "./components/Header";
import * as math from "mathjs";

// state has to be 0 and not empty string otherwise it breaks if an operator is entered before a number

class App extends Component {
  state = {
    input: "0"
  };

  ConcatInput = value => {
    //have to change x to * because doesnt work as math function

    if (this.state.input.length <= 10) {

    this.setState({
      input: value === "x"
      ? this.state.input + "*"
     : this.state.input !== "0"
     ? this.state.input + value
     : value
    })};

  };

  HandleEquals = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

HandlePercent  = () => {
    this.setState({ input: math.eval(this.state.input / 100) });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <br />
          <br />
          <Header />
          <Input input={this.state.input} />

          <div className="row">
            <ACButton handleClear={() => this.setState({ input: "0" })}>
              AC
            </ACButton>
            <CButton handleClear={() => this.setState({ input: "0" })}>
              C
            </CButton>
     
            <TopRowButton handleClick={this.ConcatInput}>√</TopRowButton>
            <TopRowButton handleClick={() => this.HandlePercent()}>%</TopRowButton>
          </div>
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
            <Button handleClick={() => this.HandleEquals()}>=</Button>
            <Button handleClick={this.ConcatInput}>+</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
