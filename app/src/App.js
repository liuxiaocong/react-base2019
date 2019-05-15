import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import rootSaga from './data/sagas';
import Home from './containers/Home';
import Product from './containers/Product';
import Me from './containers/Me';
import Todo from './containers/Todo';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { StoreContext } from 'redux-react-hook';
import rootSaga from './sagas';
import rootReducer from './reducers';
import styles from './styles.css';
import lessStyles from './LApp.less';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];
const storeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, storeEnhancer);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={ store }>
      <StoreContext.Provider value={ store }>
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={ Home }/>
            <Route path="/product" component={ Product }/>
            <Route path="/me" component={ Me }/>
            <Route path="/todo" component={ Todo }/>
          </div>
        </Router>
      </StoreContext.Provider>
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