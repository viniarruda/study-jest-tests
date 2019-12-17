import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import reducers from './store';
import sagas from './store/sagas';

export default ({children, initialState = {}}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);

  return <Provider store={store}>{children}</Provider>;
};
