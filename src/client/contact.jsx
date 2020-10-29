import React from 'react';
import * as emailjs from 'emailjs-com'
import Constants from '../core/constants';
import Toast from './shared/toast';
import '../css/base.scss';
import '../css/contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      toastList: [],
    }
  }

  handleContactMeSubmit = (e) => {
    e.preventDefault();
    const { email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: Constants.ADMIN_EMAIL,
      message: message,
    };
     emailjs.send(
      Constants.EMAILJS_SERVICE_ID,
      Constants.EMAILJS_TEMPLATE_ID,
      templateParams,
      Constants.EMAILJS_USER_ID
     ).then((resp) => {
      this.resetForm();
      this.setState({toastList: [{
        id: Math.random(),
        title: 'Success',
        description: 'Your message was successfully sent to Gaurav.',
        type: 'success',
        iconName: 'check'
      }]});
    }, (err) => {
      console.log('Error while sending email: ', err);
      this.setState({toastList: this.state.toastList.push({
        id: Math.random(),
        title: 'Error',
        description: 'An error occurred while sending the message. Please check the required fields and try again.',
        type: 'error',
        iconName: 'exclamation-triangle'
      })});
    });
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({[param]: e.currentTarget.value});
  }

  render() {
    return (
      <div>
        <form className="contact-me-form" onSubmit={this.handleContactMeSubmit}>
          <label>
            Name:
            <input
              type="text"
              required
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')} />
          </label>
          <label>
            Email:
            <input
              type="email"
              required
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')} />
          </label>
          <label>
            Message:
            <input
              type="text"
              required
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')} />
          </label>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
        <Toast 
          toastList={this.state.toastList}
        />
      </div>
    );
  }
}
