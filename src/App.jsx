import React, {Component} from 'react';
import Header from './client/header';
import Body from './client/body';
import Footer from './client/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
