import { NavLink } from "react-router-dom";
import Loginform from "./Loginform";

const Navbar = () => {
  // const [showLogin, setShowLogin] = useState(false);
  // const token = localStorage.getItem("adminToken");

  // const logoutHandler = () => {
  //   localStorage.removeItem("adminToken");
  //   alert("You Logout");
  //   window.location.reload();
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/889/889648.png"
            alt="logo"
            width="32"
            className="me-2"
          />
          <span className="fw-bold text-dark">Real Trust</span>
        </NavLink>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-dark" to="/">
                HOME
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-dark" to="/service">
                SERVICES
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-dark" to="/project">
                ABOUT PROJECTS
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-dark" to="/testonomial">
                TESTIMONIALS
              </NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <a href="#contact" className="btn btn-warning text-white px-4 fw-semibold">
            CONTACT
          </a>

          
            
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
