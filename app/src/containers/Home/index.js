import React, { Component } from 'react';
import styles from './styles.css';

console.log(styles);

class Home extends React.Component {

  render() {
    return (
      <div className={ styles.wrap }>
        <div>Home Page</div>
      </div>
    );
  }
}

export default Home;