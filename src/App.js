import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { TopBar } from './components/TopBar'
import { Scene } from './scene/Scene'
import { About } from './components/sections/About'
import { Sections } from './components/Sections'
import { Container } from '@mui/system'

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Rajdhani',
    fontSize: 20,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#5CDEFE',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', width: '100vw' }}>
        <TopBar />
        <Sections />
        <Scene />
      </Box>
    </ThemeProvider>
  )
}

export default App
