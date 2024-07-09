import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components//Footer';
import About from './pages/About';
import Home from './pages/Home';
import { GithubProvider } from './context/GithubContext';


export default function App() {
  return (
    <GithubProvider>


  <BrowserRouter>
  <Navbar />
  <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
  <Footer />
  </BrowserRouter>
    </GithubProvider>
  )
}