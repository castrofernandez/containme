/* eslint-disable require-jsdoc */
'use strict';

import setupme from 'setupme';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const LOG_NAME = 'containme';

const DEFAULT_OPTIONS = {
    component: () => {},
    actions: {},
    mapStateToProps: () => {},
};

const areParamsValid = (params) => setupme
    .validate(DEFAULT_OPTIONS, params, {logName: LOG_NAME, strictly: true, deeply: false}).success;

const mapDispatchToProps = (actions) => (dispatch) => bindActionCreators(actions, dispatch);

export default (params = {}) => {
    const {component, actions = {}, mapStateToProps = (state) => state} = params;

    return areParamsValid(params) ?
        connect(mapStateToProps, mapDispatchToProps(actions))(component) :
        () => {};
};
