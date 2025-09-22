import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './Layouts/Layout.tsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8B5E3C',
      dark: '#5C3A21',
      light: '#E9DBC9',
    },
    secondary: {
      main: '#ff6949',
      light: '#E66F2F',
      dark: '#463F3C'
    },
    background: {
      default: '#EEECE3', 
      paper: '#efe2d0',
    },
    text: {
      primary: '#463F3C',
      secondary: '#242322',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif', // Base general
    h1: {
      fontFamily: '"Noto Serif", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Noto Serif", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Noto Serif", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Noto Serif", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  </React.StrictMode>
)
