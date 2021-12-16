import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./App/header";
import Footer from "./App/footer";
import './Styles/index.css'
import "./Styles/header.css"
import "./Styles/footer.css"
import "./Styles/home.css"
import "./Styles/obras.css"
import "./Styles/gallery.css"
import "./Styles/contact.css"

import Home from "./Screens/home";
import Obras from "./Screens/obras";
import Contact from "./Screens/contact";
import Gallery from "./Screens/gallery";


function App() {
  return (
      <Container  className="p-0">
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/obras" component={Obras}/>
          <Route exact path="/contacto" component={Contact}/>
          <Route exact path="/bio"/>
          <Route exact path="/galeria" component={Gallery}/>
          </Switch>
          <Footer/>
        </Router>
    </Container>
  );
}

export default App;
