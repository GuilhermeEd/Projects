import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import combinedReducers from './reducers';
import LoginPage from './components/auth/loginpage';
import SignUpPage from './components/auth/signuppage';
import UserPage from './components/user/userpage';

const INITIAL_STATE = {};
const store = createStore(combinedReducers, INITIAL_STATE, applyMiddleware(ReduxThunk));

const App = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/userpage" component={UserPage}/>
            <Route component={Home}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));