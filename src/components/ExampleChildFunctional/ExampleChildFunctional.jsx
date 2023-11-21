import React, { useEffect } from "react";

const ExampleChildFunctional = () => {
    useEffect(() => {
      // componentWillUnMount()
    return () => {
        alert("ROMPIENDO COMPONENTE!!!")
    };
  });
  return <div>ExampleChildFunctional</div>;
};

export default ExampleChildFunctional;
