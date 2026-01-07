import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainContent } from  './MainContent.jsx'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
)
