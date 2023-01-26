import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./style/global"
import { defaultTheme } from "./style/theme/default"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle/> 
    </ThemeProvider>
  )
}

export default App
