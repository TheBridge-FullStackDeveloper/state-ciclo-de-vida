import React, { useState } from "react";

const CounterFunctional = (props) => {
  const [counter, setCounter] = useState(props.counter);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      Counter Functional: {counter}
      <button onClick={increase}>+</button>
      {/* <button onClick={()=>increase()}>+</button> */}

    </div>
  );
};

export default CounterFunctional;
