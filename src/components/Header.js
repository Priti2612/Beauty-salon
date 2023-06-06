import React from 'react'
import '../index.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
    <header
      className="container-fluid text-center d-flex justify-content-start align-items-center ps-5"
    >
    <div className="text-center ps-5"><i className='bx bxl-gmail' ></i>info@louisvillebeautysalon.com</div> 
      <div className="text-center ps-3 pe-2"><i className='bx bx-phone' ></i>+654 555555</div> 
      
    </header>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} alt=''/></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" href="#product">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-lg-4" href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
};

export default Header;