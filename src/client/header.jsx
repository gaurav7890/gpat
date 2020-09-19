import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'
import '../css/base.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <FontAwesomeIcon icon="bars" className="hamburger-menu">
          hihihihih
          </FontAwesomeIcon>
        <FontAwesomeIcon icon="home" className="header-nav home"/>
        <div className="header-nav about-me">About Me</div>
        <div className="header-nav experience">Experience</div>
        <div className="header-nav contact-me">Contact Me</div>
      </div>
    );
  }
}
