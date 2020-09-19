import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'
import '../css/base.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <FontAwesomeIcon icon="bars" className="hamburger-menu"/>
        <div className="header-nav">About Me</div>
        <div className="header-nav">Experience</div>
        <div className="header-nav">Contact Me</div>
      </div>
    );
  }
}
