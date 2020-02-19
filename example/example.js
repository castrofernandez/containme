import React from 'react';
import Reactdom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import defaultContainer from '../src/index';

const App = ({field, changeField}) => {
  return (
      <React.Fragment>
          <h1>This is an example => "{field}".</h1>
          <button onClick={() => changeField('One')}>One</button>
          <button onClick={() => changeField('Two')}>Two</button>
      </React.Fragment>
      
  );
};

const AppContainer = defaultContainer(App);

const filter = (state = 'Foo', action) => action.type === 'change' ? action.field : state;

const reducers = (state = {}, action) => {
  return {
    field: filter(state.field, action),
  };
};

const store = createStore(reducers, applyMiddleware(thunk));

Reactdom.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
