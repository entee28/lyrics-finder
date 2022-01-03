import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <NavLink to="/">
                    <h1>Lyrics Finder</h1>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
