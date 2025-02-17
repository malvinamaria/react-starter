import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
