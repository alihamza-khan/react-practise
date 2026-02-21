
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./assets/Pages/About/About.jsx";
import Contact from "./assets/Pages/Contact/Contact.jsx";
import Bmi from "./assets/Pages/Bmi Calculator/Bmi.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bmi" element={<Bmi />} />
      </Routes>
    </BrowserRouter>
)
