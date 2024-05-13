import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppRouter from './AppRouter.jsx'
import '../styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
