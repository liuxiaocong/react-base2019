import React, { Component } from 'react';
import styles from './styles.css';

class Product extends Component {
  render() {
    return (
      <div className={ styles.wrap }>
        <div>Product 1</div>
        <div>Product 1</div>
        <div>Product 1</div>
      </div>
    );
  }
}

export default Product;