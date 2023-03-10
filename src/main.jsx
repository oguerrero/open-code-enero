import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ModeContextProvider } from './context/ModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position='top-right'
      autoClose={ 2000 }
      hideProgressBar={ false }
      newestOnTop={ false }
      closeOnClick
      rtl={ false }
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    />
    <BrowserRouter>
      <ModeContextProvider>
        <App />
      </ModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
