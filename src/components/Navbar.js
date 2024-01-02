import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  bg-${props.mode === 'dark' ? 'dark' : 'light'} border-bottom border-body`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Format</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Speech_Recognizer">{props.recognizer}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">{props.about}</NavLink>
              </li>
            </ul>

            <div className="form-check form-switch mx-3">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.enableDarkMode} />
              <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Dark' : 'Light'} Mode Enabled </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Default Title',
  about: 'Default About',
  mode: 'light',
}