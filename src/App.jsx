import React, {Component} from 'react';
import Header from './client/header';
import Home from './client/home';
import Footer from './client/footer';
import About from './client/about';
import Contact from './client/contact';
import Experience from './client/experience';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Footer />
        </div>

        {/* Add routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
