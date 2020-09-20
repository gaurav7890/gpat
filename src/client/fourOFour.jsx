import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'
import '../css/fourOFour.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className="fourOFour-container">
        <div className="fourOFour-text">
          <div className="fourOFour-error-number">404</div>
          There's nothing here.<br/>
          Go back
          <Link to="/">
            <FontAwesomeIcon icon="home" className="home"/>
          </Link> 
        </div>
        <div className="fourOFour-background-gif"></div>
      </div>
    );
  }
}
