import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ name, number, id }) => (
            <li className={styles.item} key={id}>
              <span>{name}</span>:<span className={styles.span}>{number}</span>
              <button
                className={styles.button}
                onClick={() => this.props.deleteContact(id)}
              >
                <FontAwesomeIcon className={styles.icon} icon={faUserXmark} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
ContactList.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  deleteContact: propTypes.func,
};
export default ContactList;
