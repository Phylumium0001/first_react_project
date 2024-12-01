import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Excercise from "./assignment.jsx"
// import Welcome from './welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Excercise />
    {/* <Welcome /> */}
  </StrictMode>,
)
