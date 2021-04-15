import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor, persistConfig } from './store'
import crossBrowserListener from './reduxpersist-listener'
import './index.css'
import App from './App'

window.addEventListener('storage', crossBrowserListener(store, persistConfig));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);