import React from "react";

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    // console.log("Se ha montado el componente");
    setTimeout(() => {
    //   console.log("Han pasado 2 segundos desde que se montó");
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("el componente se ha actualizado");
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}
