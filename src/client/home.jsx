import React from 'react';
import { Link } from "react-router-dom";
import '../css/home.scss'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="welcome-page-background"></div>
        <div className="welcome-page">
            <div className="welcome-name">
              Gaurav Patnashetty.
            </div>
            <div className="welcome-one-liner">
              Not your average Fullstack Developer.
            </div>
            <div className="learn-more-button">
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
        </div>
      </>
    );
  }
}
