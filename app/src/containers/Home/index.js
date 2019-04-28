import React, { Component } from 'react';
import styles from './styles.css';

console.log(styles);

class Home extends React.Component {

  render() {
    return (
      <div className={ styles.title }>
        Home Page
      </div>
    );
  }
}

export default Home;