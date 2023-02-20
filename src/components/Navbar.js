import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  const changeColor = (event) => {
    let color = event.target.value;
    props.bg_color(color)
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about_us}</Link>
              </li>
            </ul>
            <div>
              <input type="color" name='color' id='bg-color' onChange={changeColor} />
            </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">
                {props.mode ==='light'?'Enable Dark Mode':'Enable Light Mode'}
                </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

  
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about_us: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title',
    about_us: 'set about title'
  };