
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";  
import "./Header.css";
import { useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [text, setText] = useState("")
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    if(e.keyCode == 13) {
      navigate(`search/${text}`)
    }
  }

  return (
    <div className="header">
    <div className="header-top">
      <Link> <img src="https://www.themealdb.com/images/logo-small.png" alt="Logo" /></Link>
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <div className={`header-btn ${menuOpen ? "open" : ""}`}>
        <Link><button>Home</button></Link>
        <Link><button>API</button></Link>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Search" onKeyDown={handleKeyDown} />
      </div>
    </div>
  </div>
  )
}

export default Header
