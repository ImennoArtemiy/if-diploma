import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles} from "./globalStyles";
import './assets/fonts/fonts.css'
import SvgSprite from "./assets/SvgSprite";
import {Provider} from "react-redux";
import store from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {persiStore} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persiStore}>
              <BrowserRouter>
                  <SvgSprite/>
                  <GlobalStyles/>
                  <App />
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);
