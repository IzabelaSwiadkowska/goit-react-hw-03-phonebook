import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import styles from './ContactForm/ContactForm.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount(prevState, prevProps) {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    this.setState({ contacts: JSON.parse(contactsFromLocalStorage) });
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      el =>
        el.name.toLowerCase().trim() === contact.name.toLowerCase().trim() ||
        el.number.trim() === contact.number.trim()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const inputContact = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(inputContact)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} addFilter={this.addFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
