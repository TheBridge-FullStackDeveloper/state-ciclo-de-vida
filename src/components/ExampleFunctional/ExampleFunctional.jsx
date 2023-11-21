import React, { useState, useEffect } from "react";

const ExampleFunctional = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const [number, setNumber] = useState(0);
  //componentDidMount()
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 1000);
    setNumber(number + 1)
  }, []);

  //componentDidUpdate()
  useEffect(() => {
    console.log("Se ha actualisaoh el componente");//3 veces
  });

  useEffect(() => {
    console.log("FavoriteColor ha cambiado");//2 veces
  }, [favoriteColor]);
  
  return <h1>My Favorite Color is {favoriteColor} Number:{number}</h1>;
};

export default ExampleFunctional;
