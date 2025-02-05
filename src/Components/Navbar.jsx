import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = ({ searchMovie }) => {
  // Retrieve the dark mode state from localStorage on component mount
  const savedDarkMode = localStorage.getItem('darkMode') === 'true'
  const [darkMode, setDarkMode] = useState(savedDarkMode)

  // Change mode
  const toggleMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)

    // Save the new mode to localStorage
    localStorage.setItem('darkMode', newMode)

    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode', newMode)
  }

  // Apply the initial theme from localStorage on page load
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

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
