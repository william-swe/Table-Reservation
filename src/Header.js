import logo from './images/Logo.jpg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ width: '200px', paddingLeft: '10px', paddingTop: '10px' }}></img>
        </header>
    )
}

export default Header;