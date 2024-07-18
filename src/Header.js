import "./Header.css"
import logo from './images/Logo.jpg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo"></img>
        </header>
    )
}

export default Header;