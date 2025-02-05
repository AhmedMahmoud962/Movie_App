import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = ({ searchMovie }) => {
  const [darkMode, setDarkMode] = useState(false)

  // Change mode
  const toggleMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <div className={`nav-style w-100 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <Row className="py-3 align-items-center">
          {/* logo */}
          <Col xs="3" lg="2" className="text-start">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Col>

          {/* search */}
          <Col xs="6" lg="8" className="d-flex justify-content-center">
            <div className="search-box">
              <i className="fa fa-search search-icon"></i>
              <input
                type="text"
                className="form-control search-input"
                placeholder="ابحث عن فيلم..."
                onChange={(e) => searchMovie(e.target.value)}
              />
            </div>
          </Col>

          {/* change mode */}
          <Col xs="3" lg="2" className="text-end">
            <button className=" toggle-btn" onClick={toggleMode}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar
