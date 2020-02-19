/* eslint-disable require-jsdoc */
'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const changeField = (field) => ({
    type: 'change',
    field,
});

export default (component) => {
    const mapStateToProps = (state) => {
        return {
            field: state.field,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
            {
                changeField,
            },
            dispatch,
        );
    };

    return connect(mapStateToProps, mapDispatchToProps)(component);
};
