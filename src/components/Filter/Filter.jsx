import propTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, addFilter } = this.props;
    return (
      <div className={styles.container}>
        <label>Find contacts by name</label>
        <input
          className={styles.input}
          placeholder="Enter name"
          type="text"
          name="filter"
          value={filter}
          onChange={addFilter}
        ></input>
      </div>
    );
  }
}
Filter.propTypes = {
  filter: propTypes.string,
  addFilter: propTypes.func,
};
export default Filter;
