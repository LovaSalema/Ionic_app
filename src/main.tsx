import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MineProvider } from './context/MineContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
        <MineProvider> 
            <App />
        </MineProvider>
  </React.StrictMode>
);