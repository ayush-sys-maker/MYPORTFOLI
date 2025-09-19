import React from 'react'
import './index.css'

function Navbar() {
    return (
        <div className="navbar">
            
           <div className="navcontent">
            <p onClick={() => window.location.href = "#projects"}   >Projects</p>
            <p onClick={() => window.location.href = "/Myresume.pdf"}   >Resume</p>
            <p onClick={() => window.location.href = "#about"}   >About</p>
            <p onClick={() => window.location.href = "https://github.com/ayush-sys-maker"}   >GitHub</p>
           </div>
        </div>
    )
}
export default Navbar
