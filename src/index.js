import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Global } from "@emotion/react";
import { GlobalStyles } from './globalStyles.styles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
