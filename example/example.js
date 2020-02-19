import React from 'react';
import Reactdom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

import defaultContainer from '../src/index';

const AppContainer = defaultContainer({
  component: App,
  actions: {
    changeField(field) {
        return {
            type: 'change',
            field,
        };
    },
  },
  mapStateToProps: (state) => ({
    field: state.field,
  }),
});

Reactdom.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
