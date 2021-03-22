// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Social from "./components/Social"
import Main from "./routes/Main";
import About from "./routes/About";
import Projects from "./routes/Projects"
import Contact from "./routes/Contact";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Social />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
