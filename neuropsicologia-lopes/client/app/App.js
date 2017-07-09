import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import combinedReducers from './reducers';
import Home from './components/home';
import SignUpForm from './components/signupform';


const INITIAL_STATE = {};
const store = createStore(combinedReducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignUpForm}/>
          </Switch>
        </Router>
      </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));