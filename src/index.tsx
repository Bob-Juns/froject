import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8888';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
);
