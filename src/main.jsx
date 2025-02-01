import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Flowbite } from 'flowbite-react';
// import customTheme from './Theme/flowbiteTheme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Flowbite theme={{ theme: customTheme }}> */}
      <App />
    {/* </Flowbite> */}
  </StrictMode>,
)
