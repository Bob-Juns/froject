import React from 'react';
import { render } from 'react-dom';

import axios from 'axios';
import { API_URI } from '../config';

// styles
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

axios.defaults.baseURL = API_URI;

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
);
