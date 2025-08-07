import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
if (import.meta.hot) {
  import.meta.hot.accept();
}
// This enables hot module replacement (HMR) for the React application.
// It allows the app to update in real-time without a full reload, improving development efficiency.
// The `import.meta.hot.accept()` function is called to set up the HMR listener.

