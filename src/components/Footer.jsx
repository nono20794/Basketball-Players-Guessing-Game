import "./Footer.css";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Link to="/" className="logo-container" aria-label="View home page">
        <h1 className="logo-title">לוגו</h1>
      </Link>
      <p className="footer-rights">&copy;</p>
      <i className="fa-brands fa-x-twitter" id="social-icon"></i>
    </footer>
  );
}
