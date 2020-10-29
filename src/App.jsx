import React, {Component} from 'react';
import Header from './client/header';
import Home from './client/home';
import Footer from './client/footer';
import About from './client/about';
import Contact from './client/contact';
import Experience from './client/experiences';
import FourOFour from './client/fourOFour';
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
          {/* Add routes */}
          <div className="main-content">
            <Switch>
              {/* TODO: remove this once deployed */}
              <Route exact path="/gpat">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experiences">
                <Experience />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <FourOFour />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
