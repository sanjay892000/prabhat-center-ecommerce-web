import React, { useEffect, useState } from 'react'
import './recommendations.css'
import {Link} from "react-router-dom";
function Recommendations() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='recommendations'>
      <div className="main-recom">
      <p className='recomp'>See personalized recommendations</p>
      <button onClick={scrollToTop}><Link style={{textDecoration:'none', color:'white'}} to="/login">Sign In</Link></button>
      <p>New customer?<Link style={{textDecoration:'none'}} onClick={scrollToTop} to="/signup"> Start here</Link></p>
      </div>
    </div>
  )
}

export default Recommendations
