import React from 'react';
import '../css/headerAndFooter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-regular';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FontAwesomeIcon icon={["far", "copyright"]} className="copyright-icon"/>
        2020 Gaurav Patnashetty
      </div>
    );
  }
}
