import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SignInProvider } from './context/profilecontext/SignInContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignInProvider>
      <App />
    </SignInProvider>
  </React.StrictMode>
);


