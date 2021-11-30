import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./App/header";
import Footer from "./App/footer";
import './Styles/index.css'
import "./Styles/header.css"
import "./Styles/footer.css"
import "./Styles/home.css"

import Home from "./Screens/home";


function App() {
  return (
      <Container fluid className="cont">
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/obras"/>
          <Route exact path="/contacto"/>
          <Route exact path="/bio"/>
          </Switch>
          <Footer/>
        </Router>
    </Container>
  );
}

export default App;
