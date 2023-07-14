import propTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  labelName = nanoid();
  labelNumber = nanoid();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.labelName} className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            id={this.labelName}
            value={name}
            placeholder="Enter name"
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.labelNumber} className={styles.label}>
            Number
          </label>
          <input
            className={styles.input}
            id={this.labelNumber}
            value={number}
            placeholder="Enter phone number"
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  number: propTypes.string,
  name: propTypes.string,
  handleSubmit: propTypes.func,
};
export default ContactForm;
