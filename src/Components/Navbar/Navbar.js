import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
      <div className='navbar'>
        <div >
          <li>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>
          </li>
        </div>
        <div className='page-links'>
          <li>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/btc">Bitcoin</Link>
          </li>
          <li>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/eth">Ethereum</Link>
          </li>
          <li>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/ada">Cardano</Link>
          </li>
        </div>
      
      </div>
  )
}

export default Navbar