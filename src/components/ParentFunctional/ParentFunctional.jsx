import { useState } from "react";
import ExampleChildFunctional from "../ExampleChildFunctional/ExampleChildFunctional";

const ParentFunctional = () => {
  const [show, setShow] = useState(true);

  const handleRemove = () => setShow(false);

  return (
    <div>
      {show ? <ExampleChildFunctional /> : null}
      <button onClick={handleRemove}>Eliminar el componete ExampleChild</button>
    </div>
  );
};
export default ParentFunctional;
