import  { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import LoginCard from './components/LoginCard';
import SignInCard from './components/SignInCard';
import './App.css'
import "./components/styles.css";

function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 9000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
    {isPreloading ? (
      <Preloader />
    ) : (
      <div id="main-content">
       <video autoPlay muted loop className="video-background">
  <source src="/disco.mp4" type="video/mp4" />
</video>


<img src="/Screenshot 2025-02-24 171913.png" alt="Event Logo" className="logo" />


        <div className="container">
          <div className="content-box">
            <div className="cards-container">
              <LoginCard />
              <SignInCard />
            </div>
            <div className="quote">
              <p>Your events, your joy. Let us bring your dreams to life</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
   
  )
}

export default App
