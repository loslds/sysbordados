import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import MainRouter from './routes'
import history from './services/history'
import GlobalStyles from './styles/GlobalStyles'
function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Router history={history}>
          <MainRouter />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
