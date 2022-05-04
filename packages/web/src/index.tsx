import React from 'react';
import App from './App';
import client from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);

root.render(<App />);
