import { Link, NavLink, useLocation, useNavigate } from "react-router";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeStyle = {
    fontSize: "26px",
    color: "#4c7dc6",
  };

  function handleNavigate(event, targetPath) {
    event.preventDefault();
    if (location.pathname === targetPath) {
      navigate("/");
    } else {
      navigate(targetPath);
    }
  }

  return (
    <header className="header-section">
      <nav
        className="header-nav-icons"
        role="navigation"
        aria-label="main navigation"
      >
        <NavLink
          to="help"
          className="single-header-icon"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={(event) => handleNavigate(event, "/help")}
          aria-label="view help details"
        >
          <i className="fa-regular fa-circle-question"></i>
        </NavLink>

        <NavLink
          to="stats"
          className="single-header-icon"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={(event) => handleNavigate(event, "/stats")}
          aria-label="view stats details"
        >
          <i className="fa-solid fa-chart-simple"></i>
        </NavLink>

        <NavLink
          to="about"
          className="single-header-icon"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={(event) => handleNavigate(event, "/about")}
          aria-label="view about details"
        >
          <i className="fa-solid fa-circle-exclamation"></i>
        </NavLink>

        <NavLink
          to="contact"
          className="single-header-icon"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          onClick={(event) => handleNavigate(event, "/contact")}
          aria-label="view contact deatails"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </NavLink>
      </nav>

      <Link to="/" className="logo-container" aria-label="View home page">
        <h1 className="logo-title">לוגו</h1>
      </Link>
    </header>
  );
}
