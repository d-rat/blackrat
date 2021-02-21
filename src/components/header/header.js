import { Link } from "gatsby"

import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header className="navbar">
      <Link className="navbar-logo" to="/">
        <h1>BLACKRAT</h1>
      </Link>

      <div
        onClick={() => {
          setShow(e => !e)
        }}
        className="navbar-ham"
      >
        <div className="navbar-ham-bar1"></div>
        <div className="navbar-ham-bar2"></div>
        <div className="navbar-ham-bar3"></div>
      </div>

      <nav className={`navbar-menu ${show && "navbar-menu-active"} `}>
        <Link to="#" className="navbar-link">
          Services
        </Link>
        <Link to="#" className="navbar-link">
          Projects
        </Link>

        <Link to="#" className="navbar-link">
          Prices
        </Link>
      </nav>
    </header>
  )
}

export default Header
