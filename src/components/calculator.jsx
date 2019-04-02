import React, { Component } from "react";

class Calculator extends Component {
  state = {
    display: 0,
    inputs: [],
    strInputs: ""
  };

  handleCalc = input => {
    let inputs = [...this.state.inputs, input];
    this.setState({
      display: input,
      inputs
    });
  };

  handleResult = () => {
    let inputs = [...this.state.inputs];
    let strInputs = ``;
    for (let i = 0; i < inputs.length; i++) {
      strInputs += `${inputs[i]}`;
    }
    const display = eval(strInputs);
    this.setState({
      inputs: [],
      display
    });
  };

  handleClear = () => {
    this.setState({
      display: 0,
      inputs: []
    });
  };

  render() {
    const { display, inputs } = this.state;

    return (
      <div>
        <h1>Calculator</h1>
        <div className="container">
          <div className="row border">
            {/* top row */}
            <div className="col border">
              {inputs.length === 0 ? display : inputs.map(input => `${input}`)}
            </div>

            {/* 2nd row */}
            <div className="w-100 border" />
            <div className="col border" onClick={this.handleClear}>
              Clear All
            </div>
            <div className="col border" onClick={this.handleResult}>
              =
            </div>
            <div className="col-3 border" onClick={() => this.handleCalc("+")}>
              +
            </div>

            {/* 3rd row */}
            <div className="w-100 border" />
            <div className="col border" onClick={() => this.handleCalc(7)}>
              7
            </div>
            <div className="col border" onClick={() => this.handleCalc(8)}>
              8
            </div>
            <div className="col border" onClick={() => this.handleCalc(9)}>
              9
            </div>
            <div className="col border" onClick={() => this.handleCalc("-")}>
              -
            </div>

            {/* 4th row */}
            <div className="w-100 border" />
            <div className="col border" onClick={() => this.handleCalc(4)}>
              4
            </div>
            <div className="col border" onClick={() => this.handleCalc(5)}>
              5
            </div>
            <div className="col border" onClick={() => this.handleCalc(6)}>
              6
            </div>
            <div className="col border" onClick={() => this.handleCalc("*")}>
              x
            </div>

            {/* 5th row */}
            <div className="w-100 border" />
            <div className="col border" onClick={() => this.handleCalc(1)}>
              1
            </div>
            <div className="col border" onClick={() => this.handleCalc(2)}>
              2
            </div>
            <div className="col border" onClick={() => this.handleCalc(3)}>
              3
            </div>
            <div className="col border" onClick={() => this.handleCalc("/")}>
              /
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
