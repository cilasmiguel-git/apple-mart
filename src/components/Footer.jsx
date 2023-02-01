import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

      <footer className="footer-distributed">

        <div className="footer-right">

          <a href='#'><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>

        </div>

        <div className="footer-left">

          <p className="footer-links">
           <NavLink className="nav-link" aria-current="page" to="/"><a className="link-1">Home</a></NavLink>

            <NavLink className="nav-link" to="/products"><a>Product</a></NavLink>

            <NavLink className="nav-link" to="/about"><a>About</a></NavLink>

            <NavLink className="nav-link" to="/contact"><a>Contact</a></NavLink>
          </p>

          <p>Apple Mart &copy; 2023</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer