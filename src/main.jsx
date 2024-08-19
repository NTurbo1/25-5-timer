import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/header/index'
import { TimerSettings } from './components/timerSettings/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <TimerSettings />    
  </StrictMode>,
)
