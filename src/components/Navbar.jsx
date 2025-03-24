import "../styles/components/Navbar.css";
import logo from "../assets/logo.png";
import mode from "../assets/mode.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} height="40px" style={{ cursor: "pointer" }} />
            <div className="menu-container">
                <Link to="/" className="menu-item">
                    Dashboard
                </Link>
                <Link to="/transfer" className="menu-item">
                    Transfer
                </Link>
                <Link to="/topup" className="menu-item">
                    Topup
                </Link>
                <Link to="/login" className="menu-item">
                    Sign Out
                </Link>
                <div className="divider" />
                <a href="#" className="menu-item" id="theme-toggle">
                    <img src={mode} height="26px" width="26px" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;