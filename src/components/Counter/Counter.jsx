import React, { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter:this.props.counter
        }
    }
  increment = () => {
    // this.state.counter = this.state.counter + 1;
    this.setState({counter:this.state.counter + 1})
    console.log(this.state.counter)
  };

  render() {
    return <div>Counter: {this.state.counter}
    <button onClick={this.increment}>+</button>
    </div>;
  }
}

export default Counter;
