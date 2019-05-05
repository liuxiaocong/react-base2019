import React, { Component } from 'react';
import styles from './styles.css';

class Me extends Component {
  render() {
    return (
      <div className={ styles.wrap }>
        <div>Evan</div>
        <div>2019</div>
        <div>Product 1</div>
      </div>
    );
  }
}

export default Me;