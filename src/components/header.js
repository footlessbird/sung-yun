import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>SUNG-YUN KANG</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <small>HOME</small>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <small>BLOG</small>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <small>ABOUT</small>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <small>CONTACT</small>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
