import "./css/Nav.css";
import logo from './images/Logo.jpg';

const Nav = () => {
    const items = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

    return (
        <nav id="navigation">
            <img src={logo} alt="Logo"></img>
            <ul>
                {items.map((item) => {
                    return <li><a href="https://example.com" target="_blank" rel="noreferrer">{item}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Nav;