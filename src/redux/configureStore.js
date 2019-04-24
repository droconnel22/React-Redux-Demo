import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable'
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { initSagas } from "./initSaga";
import rootReducer from './reducers/index';

export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware();

    const stateTransformer = (state) => {
        if (Iterable.isIterable(state)) return state.toJS();
        else return state;
    };

    const logger = createLogger({
        stateTransformer,
    });
    const middleWares = [sagaMiddleware, thunk,reduxImmutableStateInvariant(), logger];
    const composables = [applyMiddleware(...middleWares)]
    const enhancer = compose(
        ...composables
    );

        const store = createStore(
        rootReducer, 
        initialState, 
        enhancer
    );
    initSagas(sagaMiddleware);
    return store;
    
}