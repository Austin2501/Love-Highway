import React from 'react';


import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from "react-awesome-reveal";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-back pt-0" >
        <div className="container-fluid" >
          <AnchorLink className="navbar-brand" href="#home">
            <p className='ttl'>Love Highway</p>
          </AnchorLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <Fade triggerOnce><ul className="navbar-nav ms-auto mb-2 mb-lg-0  nav-border ">
              <li className="nav-item p-2 pt-3 nav-border-remove">
                <AnchorLink className="nav-link  nav-link-css active" href="#home" >
                  HOME
                </AnchorLink>
              </li>
              <li className="nav-item p-2 pt-3 ">
                <AnchorLink className="nav-link nav-link-css " activeStyle={{ color: '#5754a8' }} href="#about" >
                  ABOUT
                </AnchorLink>
              </li>
              <li className="nav-item p-2 pt-3 ">
                <AnchorLink className="nav-link nav-link-css" href="#menu" >
                  MENU
                </AnchorLink>
              </li>
              <li className="nav-item p-2 pt-3 ">
                <AnchorLink className="nav-link nav-link-css" href="#chefs" >
                  CHEFS
                </AnchorLink>
              </li>
              <li className="nav-item p-2 pt-3 ">
                <AnchorLink className="nav-link nav-link-css" href="#book" >
                  BOOK A TABLE
                </AnchorLink>
              </li>
              <li className="nav-item p-2 pt-3 " style={{ marginRight: 15 }} >
                <AnchorLink className="nav-link nav-link-css" href="#contact" >
                  CONTACT US
                </AnchorLink>
              </li>
            </ul></Fade>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar