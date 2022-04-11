import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
}

html {
    min-height: 100%;
    background: black;

}


body {
  display: block;
  margin: 0;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: black;
  color: white;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  border: 0px;
}


*, button, input {
    border: 0px;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, system-UI,sans-serif;
}

ul {
    list-style: none;
    padding-left: 0px;
}

#root{
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p{
  display: block;
  margin: 0px 16px auto;
  padding: 0px 0px 0px 0px;
}
`
export default GlobalStyles
