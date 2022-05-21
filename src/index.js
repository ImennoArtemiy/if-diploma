import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./globalStyles";
import './assets/fonts/fonts.css'
import SvgSprite from "./assets/SvgSprite";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <SvgSprite/>
          <GlobalStyles/>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);
