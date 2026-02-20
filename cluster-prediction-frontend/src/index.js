import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Capacitor } from '@capacitor/core';

if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios') {
  document.documentElement.classList.add('cap-ios');
}

// iOS (Capacitor) fix: prevent select focus from jumping scroll position
if (window.Capacitor?.getPlatform?.() === 'ios') {
  let lastScrollY = 0;

  // record scroll position when a select is focused
  document.addEventListener(
    'focusin',
    (e) => {
      if (e.target && e.target.tagName === 'SELECT') {
        lastScrollY = window.scrollY || 0;

        // iOS sometimes scrolls after focus; restore immediately after
        setTimeout(() => window.scrollTo(0, lastScrollY), 0);
        setTimeout(() => window.scrollTo(0, lastScrollY), 50);
      }
    },
    true
  );

  // iOS can also jump after closing the picker / on change
  document.addEventListener(
    'change',
    (e) => {
      if (e.target && e.target.tagName === 'SELECT') {
        setTimeout(() => window.scrollTo(0, lastScrollY), 0);
        setTimeout(() => window.scrollTo(0, lastScrollY), 50);
      }
    },
    true
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
