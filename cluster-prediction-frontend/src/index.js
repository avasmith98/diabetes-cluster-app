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

  // Consolidated iOS scroll position fix for all form interactions
  let savedScrollY = 0;

  const saveScroll = () => {
    savedScrollY = window.scrollY;
  };

  const restoreScroll = () => {
    const y = savedScrollY;
    window.scrollTo(0, y);
    requestAnimationFrame(() => window.scrollTo(0, y));
    setTimeout(() => window.scrollTo(0, y), 100);
  };

  // Save scroll when user starts interacting with any form element
  const onPointerDown = (e) => {
    if (e.target.matches('input, select, textarea, button')) {
      saveScroll();
    }
  };

  document.addEventListener('touchstart', onPointerDown, { passive: true, capture: true });
  document.addEventListener('mousedown', onPointerDown, { capture: true });

  // Restore scroll on focus changes (keyboard open/close, picker open)
  document.addEventListener('focusin', restoreScroll, true);
  document.addEventListener('focusout', restoreScroll, true);

  // Restore scroll after select picker closes
  document.addEventListener('change', (e) => {
    if (e.target.matches('select')) {
      restoreScroll();
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
