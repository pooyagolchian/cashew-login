import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import reportWebVitals from './reportWebVitals'
import { ToastProvider } from 'react-toast-notifications'
import App from './App'
import './assets/style.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastProvider autoDismiss={true} autoDismissTimeout={1000}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ToastProvider>
    </Provider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
