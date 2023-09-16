import React from 'react';
import Routes from './Routes';
import './index.css'; 
import HeroSection from './HeroSection';
import './App.css';
import Footer from './footer';

function App() {
  return (  
    <div className="App">
 <HeroSection />
    <h1 className='container text-lg font-bold mt-5'>Featured Movie</h1>
    <Routes />
    
    <Footer />
    </div>
  );
}

export default App;
