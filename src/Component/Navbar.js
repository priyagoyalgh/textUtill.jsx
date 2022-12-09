import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">{props.about}</Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="myBox" />
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="myBox">Enable dark mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'I am Titlebar',
  about: 'about here'
};
