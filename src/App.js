

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import { AppProvider } from './context/AppContext'; 

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from 'react'
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
//import Category from './components/Category';
//import ToastContainer from './components/ToastContainer';
function MainLayout() {
  return (
  <div>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />

  </div>
  );
}




function App() {
  return (
    
      <AuthProvider> 
  
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </AppProvider>
    </AuthProvider>
  );
}
export default App;