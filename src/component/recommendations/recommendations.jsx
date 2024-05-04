import React from 'react'
import './recommendations.css'
import {Link} from "react-router-dom";
function Recommendations() {
  return (
    <div className='recommendations'>
      <div className="main-recom">
      <p className='recomp'>See personalized recommendations</p>
      <button>Sign in</button>
      <p>New customer?<Link style={{textDecoration:'none'}} to="/signup"> Start here</Link></p>
      </div>
    </div>
  )
}

export default Recommendations
