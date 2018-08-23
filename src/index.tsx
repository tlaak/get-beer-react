import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import beerReducer from './reducers/beerReducer'
import beerSaga from './sagas/beerSaga'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  beerReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(beerSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
