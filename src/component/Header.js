import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
const Header = (props) => {

  let navigate = useNavigate();
  const setlogout = () => {
    props.setislogin(false);
    navigate('/signin')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Routing Demo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }} className="nav-link active" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }} className="nav-link" to="/signin" >Signin</NavLink>
              </li><li className="nav-item">
                <NavLink style={({ isActive }) => {
                  return {  
                    color: isActive ? "red" : "",
                  };
                }} className="nav-link" to="/signup" >Signup</NavLink>
              </li>

              {
                props.islogin &&
                <>
                  <li className="nav-item">
                    <NavLink style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }} className='nav-link' to="p/dashboard" >Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }} className='nav-link' to="p/about" >About</NavLink>
                  </li>
                </>
              }

            </ul>
            {
              props.islogin &&
              <button className="btn btn-outline-success" onClick={setlogout} type="submit">Logout</button>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header