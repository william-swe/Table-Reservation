import "./css/Nav.css";
import logo from './images/Logo.jpg';

const Nav = () => {
    return (
        <nav id="navigation">
            <img src={logo} alt="Logo"></img>
            <ul>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">Home</a></li>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">About</a></li>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">Menu</a></li>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">Reservations</a></li>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">Order Online</a></li>
                <li><a href="https://example.com" target="_blank" rel="noreferrer">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;