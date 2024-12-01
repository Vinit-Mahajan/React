import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>This is MyApp ! </h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  
  <MyApp />

)
