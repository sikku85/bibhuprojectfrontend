import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='wrapper' >
        <div className='navbar'>
        <div className='left'>
        {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <div className='btn'><NavLink className="Testdecoration" to={"/"} >Home</NavLink></div>
            <div className='btn'><NavLink className="Testdecoration" to={"/about"}>About</NavLink></div>
            <div className='btn'><NavLink className="Testdecoration" to={"/contact"}>Contact</NavLink></div>
            {/* <div className='btn'><NavLink className="Testdecoration" to={"/admin"}>Admin</NavLink></div> */}

        </div>
        <div>
            <img src="" alt="" />
        </div>

        </div>
        
    </div>
  )
}
