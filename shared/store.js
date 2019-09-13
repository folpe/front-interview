import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import 'regenerator-runtime/runtime'

import Reducers from '../reducers'
import rootSaga from './saga'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(Reducers, enhancer)

sagaMiddleware.run(rootSaga)

if (module && module.hot) {
  module.hot.accept('../reducers', () => {
    const nextGTR = require('../reducers').default
    store.replaceReducer(nextGTR)
  })
}

export default store
