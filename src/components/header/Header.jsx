import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I am</h5>
        <h1>Harsh Chhachhia</h1>
        <h5 className="text-light">Electronics and Communication Undergrad</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header