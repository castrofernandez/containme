/* eslint-disable require-jsdoc */
'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (actions) => (dispatch) => bindActionCreators(actions, dispatch);

export default ({component, actions = {}, mapStateToProps = (state) => state}) => {
    return connect(mapStateToProps, mapDispatchToProps(actions))(component);
};
