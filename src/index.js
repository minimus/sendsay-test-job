import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './redux/reducer'
import App from './App'

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(loggerMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
)
