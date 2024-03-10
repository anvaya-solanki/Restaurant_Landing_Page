import React, { useState } from 'react'
import Logo from "../Assets/Logo1.jpg"

const Navbar = () => {
    const menuOptions = [
        {
            text: "Home"
        },
        {
            text: "About"
        },
        {
            text: "Testimonials"
        },
        {
            text: "Contact"
        },
        {
            text: "Cart"
        },
    ]
  return (
    <nav>
        <div className = "nav-logo-container">
            <img src = {Logo} alt=""/>
        </div>
        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact Us</a>
            <a href="">
                <button className = "primary-button">
                    Book Now
                </button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar