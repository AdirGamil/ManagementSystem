import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss'
import { RootCmp } from './RootCmp'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Router>
    <RootCmp />
  </Router>
  // </StrictMode>
)
