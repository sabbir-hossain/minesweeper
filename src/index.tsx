import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from "./store";
import { Provider } from "react-redux";
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';
import { LoadingBar } from 'react-redux-loading-bar';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactNotifications  />
      <LoadingBar style={{ backgroundColor: '#ffd700', height: '5px', zIndex: 100}} />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
