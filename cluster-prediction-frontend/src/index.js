import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Capacitor } from '@capacitor/core';

// iOS platform detection - do once reliably
const isIOSCapacitor = (() => {
  try {
    return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios';
  } catch {
    return false;
  }
})();

if (isIOSCapacitor) {
  document.documentElement.classList.add('cap-ios');

  let savedScrollY = 0;

  // Handle select elements
  document.addEventListener('touchstart', (e) => {
    const select = e.target.closest('select');
    if (!select) return;

    // Save scroll position before iOS moves anything
    savedScrollY = window.scrollY;

    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
      // Blur input first, let keyboard close, then focus select
      e.preventDefault();
      active.blur();

      setTimeout(() => {
        savedScrollY = window.scrollY; // Update after keyboard closed
        select.focus();
        // Restore after picker opens
        setTimeout(() => window.scrollTo(0, savedScrollY), 50);
      }, 300);
    } else {
      // No keyboard open - just restore scroll after picker opens
      setTimeout(() => window.scrollTo(0, savedScrollY), 50);
    }
  }, { passive: false, capture: true });

  // Restore scroll when picker closes (value selected or cancelled)
  document.addEventListener('change', (e) => {
    if (e.target.matches('select')) {
      setTimeout(() => window.scrollTo(0, savedScrollY), 50);
    }
  }, true);

  document.addEventListener('blur', (e) => {
    if (e.target.matches('select')) {
      setTimeout(() => window.scrollTo(0, savedScrollY), 50);
    }
  }, true);
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
