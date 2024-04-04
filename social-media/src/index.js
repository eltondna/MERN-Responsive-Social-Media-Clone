import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkmodeContextProvider } from './context/darkModeContext';
import {AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkmodeContextProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </DarkmodeContextProvider>
);
