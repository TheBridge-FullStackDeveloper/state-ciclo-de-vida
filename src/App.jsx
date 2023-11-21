import "./App.css";
import Counter from "./components/Counter/Counter";
import CounterFunctional from "./components/CounterFunctional/CounterFunctional";
import Example from "./components/Example/Example";
import ExampleFunctional from "./components/ExampleFunctional/ExampleFunctional";
import Parent from "./components/Parent/Parent";
import ParentFunctional from "./components/ParentFunctional/ParentFunctional";

function App() {
  return (
    <div>
      {/* <Counter counter={0} />
      <Counter counter={3} />
      <Counter counter={7} />
      <CounterFunctional counter={0}/>
      <CounterFunctional counter={2}/> */}
      {/* <Example /> */}
      {/* <Parent /> */}
      {/* <ExampleFunctional /> */}
      <ParentFunctional />
    </div>
  );
}

export default App;
