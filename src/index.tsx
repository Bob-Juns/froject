import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

// styles
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URI
    : 'http://localhost:5055';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
);
