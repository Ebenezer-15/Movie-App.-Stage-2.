import React from 'react';
import Routes from './Routes'; // Import your Routes component
import './index.css'; // Import the Tailwind CSS styles
import HeroSection from './HeroSection';
import './App.css';
import Footer from './footer';

function App() {
  return (  
    <div className="App">
 <HeroSection />
    <h1 className='container text-lg font-bold'>Featured Movie</h1>
    <Routes />
    
    <Footer />
    </div>
  );
}

export default App;
