import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NavBar from './components/navbar';
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <NavBar/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));