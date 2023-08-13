import React from "react";
import { HelloWorld, Jumbotron } from "./lib";

const App = () => {
  return (
    <>
      <HelloWorld greetee={"Universe"} />
      <Jumbotron
        title={"Welcome to our Website"}
        text={"This is a simple jumbotron"}
        button={"Learn More"}
      />
    </>
  );
};

export default App;
