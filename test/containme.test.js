'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import defaultContainer from '../src/index';
import { mount } from 'enzyme';
import store from '../example/store';
import App from '../example/app';

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

describe('containme', () => {
    test('action works', () => {
        const component = mount((
            <Provider store={store}>
                <AppContainer />
            </Provider>
        ));

        component.find('#btn1')
            .simulate('click');

        expect(component.find('#label').text()).toEqual('One');

        component.find('#btn2')
            .simulate('click');

        expect(component.find('#label').text()).toEqual('Two');
    });
});