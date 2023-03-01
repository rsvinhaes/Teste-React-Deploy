import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@material-ui/core';
import GlobalContextProvider from './context/GlobalContextProvider';

const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans',
    h3: {
      fontFamily: 'Montserrat',
    },

  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>

    <React.StrictMode>
      <GlobalContextProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </GlobalContextProvider>
    </React.StrictMode>

  </ThemeProvider>
);
