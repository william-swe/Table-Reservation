import "../css/Nav.css";
import logo from '../images/Logo.jpg';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const items = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

    return (
        <nav id="navigation">
            <img
                src={logo}
                alt="Logo"
                onClick={() => navigate("/")} // Navigate to the main page
            />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item === "Home" ? (
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    navigate("/"); // Navigate to the main page
                                }}
                            >
                                {item}
                            </a>
                        ) : (
                            <a
                                href="https://example.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
