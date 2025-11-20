import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Only mount React if the root element exists.
// This prevents the app from crashing when index.html is running in "Vanilla JS mode"
// (which does not have a #root div) but the build system still injects this script.
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("React root not found. Running in Vanilla JS mode.");
}