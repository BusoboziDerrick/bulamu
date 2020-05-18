import React from "react";
import Bulamu from "./Bulamu";
import Login from "./Login";
import Appointment from "./Appointment";
import Content from "./Content";
import Hworker from "./Hworker";
import Kys from "./Kys";
import Panel from "./Panel";
import Profession from "./Profession";

// I will use react-router-dom for navigation btn components
// so i will install using [ npm i react-router-dom ]
import { Route } from "react-router-dom"; // just read about react-roter-dom

const App = () => {
  return (
    <>
      <Route path="/" exact component={Bulamu} />
      <Route path="/login" component={Login} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/content" component={Content} />
      <Route path="/hworker" component={Hworker} />
      <Route path="/kys" component={Kys} />
      <Route path="/panel" component={Panel} />
      <Route path="/profession" component={Profession} />
    </>
  );
};

export default App;
