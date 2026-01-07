import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardWrapper } from "../components/CardWrapper.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardWrapper />
  </StrictMode>,
)
