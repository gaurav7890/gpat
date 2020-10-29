import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'
import '../css/headerAndFooter.scss';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.headerIconRef = React.createRef();
    this.state = {
      mobileHeaderExpanded: false,
    }
  }

  componentDidMount () {
    window.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.handleOutsideClick)
  }

  handleOutsideClick = (e) => {
    if (this.state.mobileHeaderExpanded && !this.headerIconRef.current.contains(e.target)) {
      this.setState({mobileHeaderExpanded: false});
    }
  }

  handleMobileMenuClick = () => {
    const { mobileHeaderExpanded } = this.state;
    this.setState({...this.state, mobileHeaderExpanded: !mobileHeaderExpanded});
  }

  render() {
    return (
      <div className="header">
        <div className="menu-icon-container" ref={this.headerIconRef}>
          <FontAwesomeIcon
            icon={this.state.mobileHeaderExpanded ? 'times' : 'bars'}
            className="hamburger-menu"
            onClick={() => this.handleMobileMenuClick()}
          />
        </div>
        <div className={!this.state.mobileHeaderExpanded ? 'header-section-closed-mobile header-section' : 'header-section'}>
          <Link to="/" onClick={() => this.handleMobileMenuClick()}>
            <FontAwesomeIcon icon="home" className="header-nav home"/>
          </Link>
          <Link to="/about" onClick={() => this.handleMobileMenuClick()}>
            <div className="header-nav about-me">About Me</div>
          </Link>
          <Link to="/experiences" onClick={() => this.handleMobileMenuClick()}>
            <div className="header-nav experience">Experiences</div>
          </Link>
          <Link to="/contact" onClick={() => this.handleMobileMenuClick()}>
            <div className="header-nav contact-me">Contact Me</div>
          </Link>
        </div>
      </div>
    );
  }
}
