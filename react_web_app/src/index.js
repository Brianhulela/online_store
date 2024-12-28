import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-inter';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',  // Set the Inter font here
  },
  palette: {
    mode: 'light',  // Set mode to 'light' for light mode
    primary: {
      main: '#f58a07 ',  // Set the primary color
    },
    secondary: {
      main: '#0d1821',  // Set the secondary color
    },
    background: {
      default: '#d3d0cb',  // Light background color
      paper: '#d3d0cb ',  // Color for card and paper-like components
    },
    text: {
      primary: '#0d1821',  // Primary text color
      secondary: '#d3d0cb',  // Secondary text color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />  {/* Apply global styles */}
    <App />
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
