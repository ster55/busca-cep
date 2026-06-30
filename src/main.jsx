// Importa o React e o ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importa o BrowserRouter para controlar as rotas
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Envolve a aplicação com o BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)