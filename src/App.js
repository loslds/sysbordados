import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import MainRouter from './routes'
import history from './services/history'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router history={history}>
          <MainRouter />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
