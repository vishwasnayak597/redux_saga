import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

//create saga middleware
const sagaMiddleware=createSagaMiddleware();

// mount it on the Store
const store= createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;