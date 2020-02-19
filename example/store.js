import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const filter = (state = 'Foo', action) => action.type === 'change' ? action.field : state;

const reducers = (state = {}, action) => {
    return {
        field: filter(state.field, action),
    };
};

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
