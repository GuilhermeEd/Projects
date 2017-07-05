import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home';
import combinedReducers from './reducers';

const INITIAL_STATE = {};
const store = createStore(combinedReducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

const App = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));