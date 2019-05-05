import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import Product from './containers/Product';
import Me from './containers/Me';
import Todo from './containers/Todo';
import { createStore } from 'redux';
import rootReducer from './reducers';
import styles from './styles.css';
import lessStyles from './LApp.less';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={ Home }/>
          <Route path="/product" component={ Product }/>
          <Route path="/me" component={ Me }/>
          <Route path="/todo" component={ Todo }/>
        </div>
      </Router>
    </Provider>
  );
}

function Header() {
  return (
    <ul className={ `${styles.header} ${lessStyles.header}` }>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/me">ME</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>
  );
}

export default App;