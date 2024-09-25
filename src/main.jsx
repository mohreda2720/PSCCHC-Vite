import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Ensure the path to App.js is correct
import './index.css';     // If you have a global stylesheet
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './Components/LanguageContext.jsx';
import { Provider } from 'react-redux';
import {store} from './Components/Store/store.js';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'cairo',
      textTransform: 'none',
      fontSize: 20,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </LanguageProvider>
    </React.StrictMode>
  </BrowserRouter>
);

