import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Product from './containers/Product';
import Me from './containers/Me';
import styles from './styles.css';
import lessStyles from './LApp.less';

console.log(styles);
console.log(lessStyles);

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={ Home }/>
        <Route path="/product" component={ Product }/>
        <Route path="/me" component={ Me }/>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul className={ `${styles.header} ${lessStyles.header}` }>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;