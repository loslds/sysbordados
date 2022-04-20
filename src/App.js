import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import { store } from '../store/store'


const theme = createTheme(
  {
    palette:{
      primary: {
        main: '#2196f3'
      }
    }
  }
)

function App() {

  return (
    <Provider store= {store}>
      <ThemeProvider Theme={theme}>
        <div className='App'>
          <h1>Ola Redux</h1>
        </div>
      </ThemeProvider>
    </Provider>
    )

}
 export default App
