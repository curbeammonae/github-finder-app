import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components//Footer';
import About from './pages/About';
import Home from './pages/Home';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';
import Alert from './components/Alert';
import User from './pages/User';


export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>

     


  <BrowserRouter>
  <Navbar />
  <Alert />
  <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/users/:login' element={<User />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </AlertProvider>
    </GithubProvider>
  )
}