import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Qr from './Qr';
import reportWebVitals from './reportWebVitals';

const qrroot = ReactDOM.createRoot(document.getElementById("qr-root"));
qrroot.render(
    <React.StrictMode>
    <Qr />
    </React.StrictMode>
);

reportWebVitals();
