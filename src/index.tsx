import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 10px;
  }
  
  ul,
  ol {
    list-style: none;
  }
  
  a,
  button {
    text-decoration: none;
    color: inherit;
  }
`;

const store = setupStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle/>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

